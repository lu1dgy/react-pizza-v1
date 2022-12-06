import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="132" cy="142" r="115" />
      <rect x="-1" y="275" rx="6" ry="6" width="280" height="25" />
      <rect x="-3" y="313" rx="6" ry="6" width="280" height="84" />
      <rect x="3" y="410" rx="6" ry="6" width="91" height="31" />
      <rect x="137" y="410" rx="20" ry="20" width="140" height="43" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
