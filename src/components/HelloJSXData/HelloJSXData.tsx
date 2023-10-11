import React, { FC } from "react";
import styles from "./HelloJSXData.module.scss";

interface HelloJsxDataProps {
  data: string[];
}

const HelloJsxData: FC<HelloJsxDataProps> = (props: HelloJsxDataProps) => {
  const { data } = props;
  return (
    <div className={styles.HelloJsxData} data-testid="HelloJsxData">
      {data.map((item, index) => (
        <p key={`Key-${index}`}>jsx{item}</p>
      ))}
    </div>
  );
};

export default HelloJsxData;
