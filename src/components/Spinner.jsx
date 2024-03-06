import RiseLoader from 'react-spinners/RiseLoader';

export const Spinner = () => {
  return (
    <div>
      <RiseLoader
        color="rgb(32,201,255)"
        cssOverride={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
