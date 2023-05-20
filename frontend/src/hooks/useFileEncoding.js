export const useFileEncoding = () => {
  const handleFileChange = (event, setPicture) => {
    const file = event.target.files[0];
    previewEncodedFile(file, setPicture);
  };

  const previewEncodedFile = async (file, setPicture) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPicture(reader.result);
    };
  };

  return {
    handleFileChange,
  };
};
