import { parseString } from "xml2js";
import { XmlFetcher } from "../hooks/useXMLData";

export const fetchTest: XmlFetcher = async () => {
  const response = await fetch("https://mp37341812449a55f912.free.beeceptor.com");
  const xmlData = await response.text();

  return new Promise((resolve, reject) => {
    parseString(xmlData, (err, result) => {
      if (err) {
        reject(err);
      } else {
        // const json = JSON.stringify(result);
        resolve(result);
      }
    });
  });
};
