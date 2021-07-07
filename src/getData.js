/**
 * This function takes an array of plot config and generates data to be supplied to C3 charts.
 * @param { plotConfigProps[] } plotConfig
 * interface plotConfigProps {
 *   length: number // length of the plot
 *   maxValue: number // max value of the plot
 * }
 */
 export const getData = (plotConfig) => {
    if (Array.isArray(plotConfig)) {
      return plotConfig.reduce((sum, { length, maxValue }, index) => {
        const data = [`data${index}`];
        for (let i = 0; i < length; i++) {
          data.push(Math.floor(Math.random() * maxValue));
        }
        sum.push(data);
        return sum;
      }, []);
    }
  
    return [];
  };