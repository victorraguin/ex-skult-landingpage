/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';

// react-chartjs-2 components
import { Bar } from 'react-chartjs-2';

// ReportsBarChart configurations
import configs from './configs';

function ReportsBarChart({ chart }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  return (
    <div className=" h-60 w-full rounded-lg bg-primary bg-gradient-to-t from-[#FF544D] to-[#FF754C] p-2">
      <Bar className="mb-0 items-center pb-0" data={data} options={options} />;
    </div>
  );
}
//style="background-color: #FF5733"
// Setting default values for the props of ReportsBarChart
ReportsBarChart.defaultProps = {
  color: 'dark',
  description: '',
};

// Typechecking props for the ReportsBarChart
ReportsBarChart.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'dark']),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default ReportsBarChart;
