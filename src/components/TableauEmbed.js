import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const TableauEmbed = () => {
  const [viz, setViz] = useState();

  useEffect(() => {
    loadViz();
  });

  const loadViz = () => {
    setViz(
      <tableau-viz src="https://public.tableau.com/views/DeezNuts_16800552253110/DeezNutsSales?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link"></tableau-viz>
    );
  };

  return (
    <>
      <Helmet>
        {/* Use this script for Tableau Public */}
        <script
          type="module"
          src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"
          async
        ></script>
        {/* Use this script for Tableau Server */}
        {/* <script
          type="module"
          src="https://embedding.tableauusercontent.com/tableau.embedding.3.1.0.min.js"
          async
        ></script> */}
      </Helmet>
      <div>{viz}</div>
    </>
  );
};

export default TableauEmbed;
