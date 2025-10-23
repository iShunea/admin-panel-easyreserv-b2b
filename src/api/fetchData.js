const urlToFileImage = async (url) => {
  const response = await fetch('http://localhost:8000' + url);
  const blob = await response.blob();
  const fileName = url.split('/').pop();
  const mimeType = blob.type || 'image/jpeg'; // Default to 'image/jpeg' if type is not available
  return new File([blob], fileName, { type: mimeType });
};

const returnImageObject = (value) => {
  const isImageObject = (obj) => {
    return obj && obj.type && obj.type.startsWith('image/');
  };

  const fetchFile = async (file) => {
    const convertedFile = await urlToFileImage(file);
    return convertedFile;
  };

  if (isImageObject(value)) {
    return value;
  }

  if (value && value.startsWith('/images')) {
    return fetchFile(value);
  }

  return null;
};

export default returnImageObject;
