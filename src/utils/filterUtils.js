function filterEmailsByStatus(emails, filter) {
  if (filter?.byStatus?.length > 0 && filter?.filterStatus === "BY_READ") {
    return emails?.filter((email) => filter?.byStatus.includes(email.id));
  }
  return emails;
}
function filterEmailsByFavorite(emails, filter) {
  if (
    filter?.byFavorite?.length > 0 &&
    filter?.filterStatus === "BY_FAVORITE"
  ) {
    return emails?.filter((email) => filter?.byFavorite.includes(email.id));
  }
  return emails;
}
export { filterEmailsByStatus, filterEmailsByFavorite };
