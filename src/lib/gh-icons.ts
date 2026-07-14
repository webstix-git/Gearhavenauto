/** Gearhaven icon system — consistent stroke, rounded caps, intentional automotive UI marks. */

const STROKE = 1.75;

type IconOpts = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: string;
};

export function ghIcon(
  inner: string,
  { size = 24, color = "currentColor", strokeWidth = STROKE, style = "" }: IconOpts = {}
): string {
  const styleAttr = style ? ` style="${style}"` : "";
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${styleAttr}>${inner}</svg>`;
}

/* Footer & contact */
export const GH_ICON_LOCATION = (opts: IconOpts = {}) =>
  ghIcon(
    '<path d="M12 21s6-5.2 6-10.5a6 6 0 1 0-12 0C6 15.8 12 21 12 21z"/><circle cx="12" cy="10.5" r="2.2"/>',
    { size: 18, color: "#3D6D92", style: "flex:none;margin-top:2px", ...opts }
  );

export const GH_ICON_PHONE = (opts: IconOpts = {}) =>
  ghIcon(
    '<path d="M6.6 4.2h2.2c.5 0 .9.3 1 .8l.5 2.4a1 1 0 0 1-.3 1l-1.4 1.4a13.5 13.5 0 0 0 5.8 5.8l1.4-1.4a1 1 0 0 1 1-.3l2.4.5c.5.1.8.5.8 1v2.2a1.8 1.8 0 0 1-1.8 1.8C9.8 19.2 4.8 14.2 4.8 6.6A1.8 1.8 0 0 1 6.6 4.2z"/>',
    { size: 18, color: "#3D6D92", style: "flex:none;margin-top:2px", ...opts }
  );

export const GH_ICON_EMAIL = (opts: IconOpts = {}) =>
  ghIcon(
    '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="m3 8 9 6.2L21 8"/>',
    { size: 18, color: "#3D6D92", style: "flex:none;margin-top:2px", ...opts }
  );

export const GH_ICON_FACEBOOK = (opts: { size?: number; color?: string } = {}) => {
  const size = opts.size ?? 20;
  const color = opts.color ?? "#3D6D92";
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`;
};

/* Service & feature marks */
export const GH_ICON_WRENCH = () =>
  ghIcon(
    '<path d="M14.4 5.6a3.6 3.6 0 0 0-4.9 4.9L4.5 15.5a1.6 1.6 0 0 0 2.3 2.3l5-5a3.6 3.6 0 0 0 4.9-4.9l-1.5 1.5 1.1 1.1 1.5-1.5z"/>'
  );

export const GH_ICON_CHECK = (opts: IconOpts = {}) =>
  ghIcon(
    '<path d="M5.5 12.2 9.8 16.5 18.5 7.8"/>',
    { size: 18, color: "#6D9DC5", strokeWidth: 2.25, ...opts }
  );

export const GH_ICON_CHECK_BADGE = () =>
  ghIcon(
    '<path d="M9 11.2 10.8 13 14.5 9.3"/><path d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9z"/>'
  );

export const GH_ICON_TIRE = () =>
  ghIcon(
    '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3"/><path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3"/>'
  );

export const GH_ICON_CAMERA = () =>
  ghIcon(
    '<path d="M4.5 8.5h3.2l1.4-2h6.8l1.4 2H20a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2V10.5a2 2 0 0 1 2-2z"/><circle cx="12" cy="13.5" r="3.2"/>'
  );

export const GH_ICON_CALENDAR = () =>
  ghIcon(
    '<rect x="4" y="5.5" width="16" height="14.5" rx="2"/><path d="M8 3.5v3.5M16 3.5v3.5M4 10.5h16"/>'
  );

export const GH_ICON_SHIELD = () =>
  ghIcon('<path d="M12 21.5s7-3.2 7-9.5V6.8L12 4 5 6.8v5.2c0 6.3 7 9.5 7 9.5z"/>');

export const GH_ICON_TRUCK = () =>
  ghIcon(
    '<path d="M2.5 8.5h10.5v8H4.8a1.8 1.8 0 0 1-1.8-1.8V8.5z"/><path d="M13 10.5h4.2l2.8 3v3.2a1.8 1.8 0 0 1-1.8 1.8H17"/><circle cx="6.8" cy="17.5" r="1.8"/><circle cx="16.8" cy="17.5" r="1.8"/>'
  );

export const GH_ICON_BOLT = () =>
  ghIcon('<path d="M13.2 2.5 6.2 13h5.1l-1.1 8.5L18.2 11h-5.1l1.1-8.5z"/>');

export const GH_ICON_GAUGE = () =>
  ghIcon(
    '<path d="M12 14.5V9"/><path d="M12 20.5a7.5 7.5 0 1 0-7.5-7.5"/><path d="M12 6V4"/><path d="M16.8 16.3l1.3 1.3"/>'
  );

export const GH_ICON_CLIPBOARD = () =>
  ghIcon(
    '<rect x="6.5" y="4.5" width="11" height="16.5" rx="2"/><path d="M9.5 4.5h5a1.5 1.5 0 0 1 1.5 1.5V6H8v-.5a1.5 1.5 0 0 1 1.5-1.5z"/>'
  );

export const GH_ICON_PHONE_MARK = () =>
  ghIcon(
    '<path d="M6.6 4.2h2.2c.5 0 .9.3 1 .8l.5 2.4a1 1 0 0 1-.3 1l-1.4 1.4a13.5 13.5 0 0 0 5.8 5.8l1.4-1.4a1 1 0 0 1 1-.3l2.4.5c.5.1.8.5.8 1v2.2a1.8 1.8 0 0 1-1.8 1.8C9.8 19.2 4.8 14.2 4.8 6.6A1.8 1.8 0 0 1 6.6 4.2z"/>'
  );

export const GH_ICON_CHEVRON = (opts: IconOpts = {}) =>
  ghIcon('<path d="m9 7.5 4.5 4.5L9 16.5"/>', {
    size: 14,
    color: "#A8B2BB",
    strokeWidth: 2,
    ...opts,
  });

export const GH_ICON_CHEVRON_HERO = () =>
  ghIcon('<path d="m9 7.5 4.5 4.5L9 16.5"/>', {
    size: 15,
    strokeWidth: 2.1,
  });

export const GH_ICON_PHONE_CTA = () =>
  ghIcon(
    '<path d="M6.6 4.2h2.2c.5 0 .9.3 1 .8l.5 2.4a1 1 0 0 1-.3 1l-1.4 1.4a13.5 13.5 0 0 0 5.8 5.8l1.4-1.4a1 1 0 0 1 1-.3l2.4.5c.5.1.8.5.8 1v2.2a1.8 1.8 0 0 1-1.8 1.8C9.8 19.2 4.8 14.2 4.8 6.6A1.8 1.8 0 0 1 6.6 4.2z"/>',
    { size: 20, strokeWidth: 2 }
  );

export const GH_SERVICE_ICONS: Record<string, string> = {
  wrench: GH_ICON_WRENCH(),
  check: GH_ICON_CHECK_BADGE(),
  tire: GH_ICON_TIRE(),
  camera: GH_ICON_CAMERA(),
  calendar: GH_ICON_CALENDAR(),
  shield: GH_ICON_SHIELD(),
  truck: GH_ICON_TRUCK(),
  bolt: GH_ICON_BOLT(),
  gauge: GH_ICON_GAUGE(),
  clipboard: GH_ICON_CLIPBOARD(),
  phone: GH_ICON_PHONE_MARK(),
};
