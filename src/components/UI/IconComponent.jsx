import React from 'react';

const IconComponent = ({ temp }) => {
  const snow = () => (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width='26' height='26' fill='url(#pattern0)' />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_16_3' transform='scale(0.00666667)' />
        </pattern>
        <image
          id='image0_16_3'
          width='150'
          height='150'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );

  const rain = () => (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width='26' height='26' fill='url(#pattern0)' />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_17_24' transform='scale(0.015625)' />
        </pattern>
        <image
          id='image0_17_24'
          width='64'
          height='64'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );

  const hail = () => (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width='26' height='26' fill='url(#pattern0)' />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_17_29' transform='scale(0.00666667)' />
        </pattern>
        <image
          id='image0_17_29'
          width='150'
          height='150'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );

  const storm = () => (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width='26' height='26' fill='url(#pattern0)' />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_17_35' transform='scale(0.00666667)' />
        </pattern>
        <image
          id='image0_17_35'
          width='150'
          height='150'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );

  const cloudy = () => (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width='26' height='26' fill='url(#pattern0)' />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_17_40' transform='scale(0.00666667)' />
        </pattern>
        <image
          id='image0_17_40'
          width='150'
          height='150'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );

  function setImage(temp) {
    if (temp <= -1 && temp >= -7) {
      return hail;
    } else if (temp <= -8 && temp >= -19) {
      return snow;
    } else if (temp == 1) {
      return storm;
    } else if (temp == 4) {
      return rain;
    } else if (temp == 10) {
      return cloudy;
    }
  }

  const IconComponent = setImage(temp)();
  return IconComponent;
};

export default IconComponent;
