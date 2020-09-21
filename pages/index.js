import { useEffect, useState } from "react";
import Foo from "../componets/Foo";
import Load from "../componets/loading";

const Home = () => {
  const [info, setinfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list ")
      .then((resp) => resp.json())
      .then((result) => {
        setinfo(result);
        setLoading(true);
      });
  });
  return (
    <>

      {loading ? (
        <div className="container">

          <div className="list">
            {info.map((item, index) => (
              <Foo info={info} index={index} item={item} />
            ))}
          </div>
        </div>

      ) : (
          <Load />

        )}
    </>
  );
};
export default Home;
