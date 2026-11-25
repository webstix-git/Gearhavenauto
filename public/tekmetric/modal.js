function onShowBooking(shopId, orgId) {
const config = {"FRONTEND_APP_URL":"https://shop.tekmetric.com/","REACT_APP_VERSION":"1.11.5","BOOKING_APP_URL":"https://booking.tekmetric.com/","REACT_APP_GOOGLE_MAPS_API_KEY":"AIzaSyAXSUZH9S124CsbtWR9hTOvORxlZG3bmPc","SERVICE_SELECTION_VARIANTS":["checkboxes","phases"],"SEND_ANALYTICS":true}
  // NOTE: Don't change the order of these lines.
  // There is a build script updating the config in this file, directly updating the 2nd line.

  // Prefer values set by the loader snippet; falls back to explicit args for shops on the legacy embed.
  shopId = shopId || window.tekmetricBooking?.shopId;
  orgId = orgId || window.tekmetricBooking?.orgId;

  const modal = document.getElementById('tekmetricBookingModal');
  const iframe = document.getElementById('tekmetricBookingIframe');
  const loader = document.getElementById('tekmetricBookingLoader');

  if (!modal || !iframe || !loader) {
    return;
  }

  const elements = { modal, iframe, loader };

  // Forward every query param from the host page so it can be delivered to the backend as lead tracking data.
  const searchParams = new URLSearchParams(window.location.search);

  if (shopId) {
    searchParams.set('shop', shopId);
  }

  if (orgId) {
    searchParams.set('org', orgId);
  }

  const currentUrl = window.location.href;
  if (currentUrl) {
    searchParams.set('currentUrl', currentUrl);
  }

  const src = `${config.BOOKING_APP_URL}?${searchParams.toString()}`;

  setLoadingState(elements);

  iframe.onload = () => {
    setIframeVisible(elements);

    window.originalBodyStyle = document.body.style.cssText;
    // Prevent background scrolling if device is mobile
    if (window.innerWidth <= 640) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    }
  };

  iframe.setAttribute('src', src);
}

function setIframeVisible({ modal, iframe, loader }) {
  modal.style.display = 'block';
  loader.style.display = 'none';
  iframe.style.visibility = 'visible';
}

function setLoadingState({ modal, iframe, loader }) {
  modal.style.display = 'none';
  loader.style.display = 'block';
  iframe.style.visibility = 'hidden';

  iframe.setAttribute('src', ''); // Clear the iframe src to prevent loading old content
}

function appendModal() {
  let modal = document.getElementById('tekmetricBookingModal');

  if (modal) {
    return;
  }

  modal = document.createElement('div');
  modal.className = 'tekmetric-overlay';
  modal.id = 'tekmetricBookingModal';
  modal.innerHTML = `
    <div class="tekmetric-booking-modal">
      <div id="tekmetricBookingLoader" class="tekmetric-booking-loader">Loading...</div>
      <iframe id="tekmetricBookingIframe" class="tekmetric-booking-iframe" allow="geolocation"></iframe>
    </div>`;
  modal.style.display = 'none';
  modal.onclick = closeModal;

  document.body.appendChild(modal);
}

function closeModal(reason) {
  const modal = document.getElementById('tekmetricBookingModal');
  const iframe = document.getElementById('tekmetricBookingIframe');

  if (!modal || !iframe) {
    return;
  }

  if (iframe.contentWindow && reason !== 'message') {
    iframe.contentWindow.postMessage('bookingTool:sendBeacon', '*');
  }

  modal.style.display = 'none';
  iframe.style.visibility = 'hidden';

  // Restore original body style and scroll position
  const scrollY = document.body.style.top;

  document.body.style.cssText = window.originalBodyStyle || '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

window.addEventListener('message', function (e) {
  if (e.data === 'bookingTool:closeModal') {
    closeModal('message');
  }

  if (e.data.name === 'bookingTool:success') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'bookingTool:success',
      payload: e.data.payload,
    });
  }
});

window.addEventListener('beforeunload', () => {
  const iframe = document.getElementById('tekmetricBookingIframe');
  const modal = document.getElementById('tekmetricBookingModal');

  if (iframe?.contentWindow && modal && modal.style.display === 'block') {
    iframe.contentWindow.postMessage('bookingTool:sendBeacon', '*');
  }
});

const AUTO_OPEN_QUERY_PARAM = 'book';

function getBookingTriggerArgs() {
  const trigger = document.querySelector('[onclick*="onShowBooking("]');
  if (!trigger) {
    return null;
  }

  const match = trigger.getAttribute('onclick').match(/onShowBooking\(([^)]*)\)/);
  if (!match) {
    return null;
  }

  return match[1]
    .split(',')
    .map((arg) => arg.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);
}

function autoOpenBookingFromQueryParam() {
  const searchParams = new URLSearchParams(window.location.search);
  if (!searchParams.has(AUTO_OPEN_QUERY_PARAM)) {
    return;
  }

  // Shops on the newer embed set window.tekmetricBooking from the loader snippet, so no DOM parsing is needed.
  if (window.tekmetricBooking) {
    onShowBooking(window.tekmetricBooking.shopId, window.tekmetricBooking.orgId);
    return;
  }

  // Legacy fallback: recover the args from the booking button's onclick attribute.
  const args = getBookingTriggerArgs();
  if (!args) {
    return;
  }

  onShowBooking(...args);
}

window.onShowBooking = onShowBooking;
appendModal();
autoOpenBookingFromQueryParam();
