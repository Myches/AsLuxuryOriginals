export const fetchData = async () => {
    try {
      const response = await fetch('https://asluxeryoriginals.pythonanywhere.com/api/products/?format=json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };