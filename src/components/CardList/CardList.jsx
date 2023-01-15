import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmails, sortByFilterStatus } from "../../features";
import { filterEmailsByStatus, filterEmailsByFavorite } from "../../utils";
import { Card, Filter, Loader, Pagination } from "../index";
import "./CardList.css";
export const CardList = () => {
  const dispatch = useDispatch();
  const { emails, isLoading } = useSelector((state) => state.allEmails);
  const filter = useSelector((state) => state.allFilters);

  useEffect(() => {
    dispatch(getAllEmails());
    dispatch(sortByFilterStatus("BY_UNREAD"));
  }, [dispatch]);

  const filterByStatus = filterEmailsByStatus(emails, filter);
  const filterByFavorite = filterEmailsByFavorite(filterByStatus, filter);

  return (
    <div className="card-list-container">
      <Filter />
      {isLoading ? (
        <Loader />
      ) : (
        filterByFavorite.map((email) => <Card key={email.id} email={email} />)
      )}
      {filter.filterStatus === "BY_UNREAD" && !isLoading ? (
        <Pagination />
      ) : null}
    </div>
  );
};
