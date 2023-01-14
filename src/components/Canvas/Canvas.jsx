import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByFavorite, removeFromFavorite } from "../../features";
import { convetISOToDesiredString } from "../../utils";
import "./Canvas.css";

export const Canvas = () => {
  const dispatch = useDispatch();
  const { currentEmail, byFavorite } = useSelector((state) => state.allFilters);
  const time = new Date(currentEmail.date).toISOString();
  return (
    <div className="canvas">
      <div>
        <div className="canvas-avatar">
          {currentEmail.from.email[0].toUpperCase()}
        </div>
      </div>
      <div>
        <div className="canvas-head">
          <div className="canvas-subject">
            <h2>{currentEmail.subject}</h2>
            <span>{convetISOToDesiredString(time)}</span>
          </div>
          <div>
            {byFavorite.includes(currentEmail.id) ? (
              <button
                className="fav-btn"
                onClick={() => dispatch(removeFromFavorite(currentEmail.id))}
              >
                Remove
              </button>
            ) : (
              <button
                className="fav-btn"
                onClick={() => dispatch(filterByFavorite(currentEmail.id))}
              >
                Mark as favorite
              </button>
            )}
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quisquam
          quis, ratione nesciunt tempora enim aperiam unde assumenda suscipit
          quae officia ad sapiente amet deserunt doloremque? Facilis quaerat
          mollitia laborum, ducimus repudiandae dolorum repellat quod nam
          accusantium cupiditate alias sapiente impedit, nesciunt itaque
          perspiciatis vel inventore, magni distinctio. Voluptatum voluptatem,
          sint et error nostrum rem molestias ea quis fuga aliquid veniam ab
          consectetur sunt quo eius enim velit similique veritatis labore culpa
          officiis quod alias placeat? Aperiam nihil et iusto, quae molestiae
          enim excepturi incidunt ducimus ipsam vitae eum. Neque illo laudantium
          dolor, excepturi, accusamus reiciendis rem sint deleniti corporis ex
          aliquam unde libero vitae ut soluta impedit quae delectus? Perferendis
          corrupti incidunt ex vitae odio? Fugit nostrum deserunt minus nemo
          veniam quis voluptatibus quod tenetur suscipit! Amet repellat
          doloribus, laudantium unde vitae nostrum repudiandae ratione qui ullam
          sequi quidem nulla vel aperiam optio modi a placeat nihil nam culpa
          rem rerum, facere quod obcaecati ipsum. Ad et vitae doloribus dolor ab
          autem delectus ratione, nostrum deleniti, itaque sed rem enim fugiat
          fuga perferendis blanditiis in! Saepe nostrum fugiat necessitatibus
          suscipit in nulla quod dolor quam eius nesciunt nam, voluptatum
          minima! Obcaecati odio molestiae dolorum recusandae eligendi, earum,
          quae ullam commodi debitis praesentium iusto voluptatem quos impedit
          unde cupiditate. Provident vero possimus nihil at dolor rem sit
          tenetur, consequatur earum eum ab nostrum commodi eos ipsam aliquid
          harum ipsum deleniti. Dolorum asperiores dolorem quo cupiditate itaque
          cum doloremque, facere, veritatis at veniam explicabo a quibusdam
          eaque magni ipsam nisi sit odio quaerat totam eveniet. Saepe vel
          quaerat omnis, iusto voluptatum magnam earum. Eveniet sunt ad
          architecto molestiae iusto impedit culpa quae voluptas recusandae.
          Provident consectetur delectus esse dolore, nam libero error iusto
          fuga quia illum quae, sint commodi quibusdam dolor expedita veritatis,
          voluptatibus illo. Tempora esse numquam, quos explicabo totam libero
          tenetur magni inventore vitae. Dolorem sequi mollitia tenetur incidunt
          tempore. Sapiente quidem, voluptatibus consectetur eos voluptatum
          adipisci sint natus optio fuga, voluptas laborum, assumenda ullam!
          Reiciendis t delectus quibusdam eos eligendi quaerat repudiandae
          fugit, consequatur officia
        </p>
      </div>
    </div>
  );
};
