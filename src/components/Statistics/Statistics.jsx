import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, stats}) {
    return (
        <section className={css.statistics}>
  <h2 class={css.title}>Upload stats</h2>

  <ul class={css.statList}> {stats.map(item => <li style={{backgroundColor: getRandomHexColor()}} className={css.item} key={item.id}>
      <span class={css.label}>{item.label}</span>
      <span class={css.percentage}>{item.percentage}%</span>
    </li>)}
  </ul>
</section>
  )
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ),
};