import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmails, sortByFilterStatus } from "../../features";
import { filterEmailsByStatus, filterEmailsByFavorite } from "../../utils";
import { Card } from "../Card/Card";
import { Filter } from "../Filter/Filter";
import "./CardList.css";
export const CardList = () => {
  const dispatch = useDispatch();
  const { emails } = useSelector((state) => state.allEmails);
  const filter = useSelector((state) => state.allFilters);

  useEffect(() => {
    dispatch(getAllEmails());
    dispatch(sortByFilterStatus("BY_UNREAD"));
  }, []);

  const filterByStatus = filterEmailsByStatus(emails, filter);
  const filterByFavorite = filterEmailsByFavorite(filterByStatus, filter);

  return (
    <div className="card-list-container">
      <Filter />
      {filterByFavorite.map((email) => (
        <Card key={email.id} email={email} />
      ))}
    </div>
  );
};
