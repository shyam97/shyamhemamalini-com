/**
 * Kept split so the address is never a single literal string in the
 * source, and rendered as "dot"/"at" text so it isn't plain-scrapable.
 */
const USER = "shyam.hemamalini";
const DOMAIN = "gmail.com";

export function emailAddress() {
  return `${USER}@${DOMAIN}`;
}

export function emailDisplay() {
  return `${USER} at ${DOMAIN}`.replace(/\./g, " dot ");
}

export function mailtoHref(subject) {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${emailAddress()}${query}`;
}
