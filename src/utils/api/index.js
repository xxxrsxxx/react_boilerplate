import axios from "axios";

/**
 * @dsc setting aixos instance
 * @param params:object
 * @returns {AxiosInstance}
 */

function createInstance() {
  let headers = {};
  const instance = axios.create({
    headers,
    timeout: 5000,
  });
  return instance;
}
const instance = createInstance();
/**
 * @param {String} url
 * @param {Object} params
 * @param {Object} data
 */
async function $_post(url, params, data) {
  try {
    const res = await instance.post(url, data, { params });
    return res;
  } catch (e) {
    console.log(
      "%c ====================postAxios error====================",
      styles.console,
      "\n URL",
      url,
      "\n PARAMS:",
      params,
      "\n DATA:",
      data,
      "\n ERROR:",
      e
    );
  }
}
/**
 * @param {String} url
 */
async function $_get(url, params) {
  try {
    const res = await instance.get(url, { params });
    //throw new Error('oops');
    return res;
  } catch (e) {
    console.log(
      "%c ====================getAxios error====================",
      styles.console,
      "\n URL:",
      url,
      "\n PARAMS:",
      params,
      "\n ERROR:",
      e
    );
  }
}

const styles = {
  console: [
    "background: yellow",
    "border: 1px solid #3E0E02",
    "color: red",
    "display: block",
    "line-height: 40px",
    "text-align: center",
    "font-weight: bold",
    "font-size: 20px",
  ].join(";"),
};

export { $_post, $_get };
