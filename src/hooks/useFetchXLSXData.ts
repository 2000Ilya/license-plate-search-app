import { useState, useEffect } from "react";
import { read, utils } from "xlsx";
import { LicensePlate } from "../types";

function useFetchXLSXData(url: string) {
  const [data, setData] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError("");
    fetch(url)
      .then((res) => {
        setLoading(false);
        return res.arrayBuffer();
      })
      .then((res) => {
        const wb = read(res);
        setData(
          utils
            .sheet_to_json<LicensePlate>(wb.Sheets[wb.SheetNames[0]])
            .map((row) => row.Name)
        );
      })
      .catch((err) => {
        setLoading(false);
        setError("Произошла ошибка при загрузке файла..");
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetchXLSXData;
