import React from 'react';

const CustomIcon = ({ width = 16, height = 16, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect width="16" height="16" fill="url(#pattern0_508_12161)" />
      <defs>
        <pattern id="pattern0_508_12161" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_508_12161" transform="scale(0.0144928)" />
        </pattern>
        <image
          id="image0_508_12161"
          width="69"
          height="69"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAARaADAAQAAAABAAAARQAAAAB6HyFMAAAD10lEQVR4Ae2czWsTQRTA38wmqY22G1MplaISPIiterC2gkr1IBVBoV48eUj/ANGD4AcexI+DXsSjCNqLiAjag3gStQVB8AMPForanmqFKJhITZu2ybgvzW4/fG13dk223Z2FsDNv5+v99s2bSXbzGMw7PpxqbRcF6AIG7QxEoxBQNa/Iis8yBjkB7BsH6BUMunfeets3WylmZgbPHtTT2XS3ke80ZQE698SiseTm688zqHMRCgLJZDOvBYjmAIGYoyoD1q9H9b0IxrAgALSQIANBBqh/aaYAm/YhohcvqMOYOpzt50WnqmhYBJAHx1XGkqgEetl2jsuuYjFDAHlwP+5DZlSUTyGP4uojX9XfNUJu1GOhCNQ27VmyifGRr5D7OWyV07cZboxX5n7kx0Zh9Ms7q287CVdQYjsOQCJ5dcl+hh/fhNSrB1a5RPIa8Ehlvj1khz/DwI0TVt92Eq5uV93uI3b6WHFlHEMJ166Dmi1tK05hOwN2DCXeetjY/TmubmdsnpVxrFW8zZ9TB++EIyjRDVuhen3CsztZ7o4dQYn71MGasOWhcA3iLR1mfV+epfcpevM+CK3WKwIjnxsHMZlz1Rdu3mQPaSiV3Jt8f3YbUi/vy+rkurzU9NEMC0FL8fshBSXecgiYpvmdCUhNH9zBTvxKFaEwLQTh2rgvAUlBGbpzxoJQVb8Jmi8+svJ+SkhNHz8pvpguUpayWEPluIZLf6TO3a+lk5kUiKlJqeEtaygNHUnAj5sDfWD/lWNSYHw/fSJr6yFcUyfF1fdQpGiUCisoBDUFRUEhCBAiZSkKCkGAEHmyT5kaTQMLu3vug19MQ9EaQiX3Ik+gfLp01PXIVzUkoOnCQ9ftUA0on0JQUVAUFIIAIVKWoqAQBAiRJ6uPFjUekVivNROjKokK439A5KcWLlCmK55A2X75qa33U4bunoP0xxdlUn3hZpVPIdgoKAoKQYAQKUtRUAgChMiT1YcYBynaePw8NHaeJq9xLUzK/4dwWUMJrdGN57qVee1jNkzlU2bTKKUVFAWFIECIlKUoKAQBQqQsZblA+T3whhhKeURjI4Mwkfkh1Th7f3KXkKphFjb+Bs4j1WZu0XMBX/ss5OeUsVt3TiUHmcLEmHQt55s3439lhVxWukOzgpPBmnXLfVY+hSDMMRgCIQ+sCHlwjA4RWAKE4tPRMgT0EdcCKzL8SS9nHO4FlgChOMZT4aWAKj3E9eCJGHuCPIqrDwZUwfghwaMwozHqH6vWu1BShIKBVDCgipEPpsUYFmIGlEEo/zynC1JMJiOSTB/61Pkxmf4CECLZHziXiOkAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export default CustomIcon;
