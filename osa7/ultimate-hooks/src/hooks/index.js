import { useState, useEffect } from "react";
import axios from "axios";

const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = () => {
    setValue("");
  };

  return {
    type,
    value,
    onChange,
    onSubmit,
  };
};

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(baseUrl);
      const data = response.data;
      setResources(data);
    };
    fetchData();
  }, [resources]);

  const create = async (newObject) => {
    const response = await axios.post(baseUrl, newObject);
    return response.data;
  };

  const service = {
    create,
  };

  return [resources, service];
};

export { useField, useResource };
