export const CertificationIcon = ({ rating, width = 16, height = 16, ...props }) => {
  if (rating === "15") {
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
        <rect width="16" height="16" fill="url(#pattern15)" />
        <defs>
          <pattern id="pattern15" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image15" transform="scale(0.0144928)" />
          </pattern>
          <image
            id="image15"
            width="69"
            height="69"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAARaADAAQAAAABAAAARQAAAAB6HyFMAAAD10lEQVR4Ae2czWsTQRTA38wmqY22G1MplaISPIiterC2gkr1IBVBoV48eUj/ANGD4AcexI+DXsSjCNqLiAjag3gStQVB8AMPForanmqFKJhITZu2ybgvzW4/fG13dk223Z2FsDNv5+v99s2bSXbzGMw7PpxqbRcF6AIG7QxEoxBQNa/Iis8yBjkB7BsH6BUMunfeets3WylmZgbPHtTT2XS3ke80ZQE698SiseTm688zqHMRCgLJZDOvBYjmAIGYoyoD1q9H9b0IxrAgALSQIANBBqh/aaYAm/YhohcvqMOYOpzt50WnqmhYBJAHx1XGkqgEetl2jsuuYjFDAHlwP+5DZlSUTyGP4uojX9XfNUJu1GOhCNQ27VmyifGRr5D7OWyV07cZboxX5n7kx0Zh9Ms7q287CVdQYjsOQCJ5dcl+hh/fhNSrB1a5RPIa8Ehlvj1khz/DwI0TVt92Eq5uV93uI3b6WHFlHEMJ166Dmi1tK05hOwN2DCXeetjY/TmubmdsnpVxrFW8zZ9TB++EIyjRDVuhen3CsztZ7o4dQYn71MGasOWhcA3iLR1mfV+epfcpevM+CK3WKwIjnxsHMZlz1Rdu3mQPaSiV3Jt8f3YbUi/vy+rkurzU9NEMC0FL8fshBSXecgiYpvmdCUhNH9zBTvxKFaEwLQTh2rgvAUlBGbpzxoJQVb8Jmi8+svJ+SkhNHz8pvpguUpayWEPluIZLf6TO3a+lk5kUiKlJqeEtaygNHUnAj5sDfWD/lWNSYHw/fSJr6yFcUyfF1fdQpGiUCisoBDUFRUEhCBAiZSkKCkGAEHmyT5kaTQMLu3vug19MQ9EaQiX3Ik+gfLp01PXIVzUkoOnCQ9ftUA0on0JQUVAUFIIAIVKWoqAQBAiRJ6uPFjUekVivNROjKokK439A5KcWLlCmK55A2X75qa33U4bunoP0xxdlUn3hZpVPIdgoKAoKQYAQKUtRUAgChMiT1YcYBynaePw8NHaeJq9xLUzK/4dwWUMJrdGN57qVee1jNkzlU2bTKKUVFAWFIECIlKUoKAQBQqQsZblA+T3whhhKeURjI4Mwkfkh1Th7f3KXkKphFjb+Bs4j1WZu0XMBX/ss5OeUsVt3TiUHmcLEmHQt55s3439lhVxWukOzgpPBmnXLfVY+hSDMMRgCIQ+sCHlwjA4RWAKE4tPRMgT0EdcCKzL8SS9nHO4FlgChOMZT4aWAKj3E9eCJGHuCPIqrDwZUwfghwaMwozHqH6vWu1BShIKBVDCgipEPpsUYFmIGlEEo/zynC1JMJiOSTB/61Pkxmf4CECLZHziXiOkAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    );
  } else if (rating === "19") {
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

        <rect width="16" height="16" fill="url(#pattern19)" />
        <defs>
          <pattern id="pattern19" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image19" transform="scale(0.0144928)" />
          </pattern>
          <image
            id="image19"
            width="69"
            height="69"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAEJklEQVR4Ae2dTWgTQRTH9+xB7z0oaEF099JmV0GQgKBV8aDX4qX2oAX1UGurFkTQQ0ELzSUUT4JaFAQ9CYKU6rWKVtrutkmKTc1XY0IraGsjjEzqpunsbnbe7jZxuy8wbHb2dbrzy39m3swmbwSBeSUOhnZrYqhPlZR3miQvaZJCgp3kpTILUe6lbBhcG6ex5sM7NVF+FWxY9mJRRflFYm9o1wY5QRDmDrTs0SRZRXj2ACkjVVSmtP0tTRWImqg8RXh88HROqqg8KgOMSaF9qqSU9At45ANJmcXF1mZBE5UBhMYHzcBJVAYEVZI/GC4EfuTlA0rZCeiq8MEyF5m8JJhfcFNosP4WAbrsrhAgAmxsl+GZApO375HkYIQrxU+eNcyvF+8PkXz0YcPSfHuH4Z54xgdPAM4eP0OKxSJ3muvs2nSzCxevkEa/VqbUTffEA4/aeAJwYTDCDY+CZgGmrt1sND9SSmcaBzA/G0OAvJJl7RLnL4DgoQKZYT/15BkCZFXFfd56hBRSaQTIDYxR39eeW2B42ISrIGbfjiJAp+qbDbeRQqGAAJ0CXHgw5AieaRPuvgH2A5dfv6k5a1nLZEFlrqXS9fUD85PTDQP4Z/mHbWWzdwf+X4CJ9g7H8EwVCJyJlDI5W4Cp6/0ggHWdiaQejyDAf4MpfC7s0PejytOT27mwrxVIm292dKyScmPvK2B0QHbHQANkR+2ZQ2EEyEKBnCPAqpkFBJxuiwARYNndqasbo6uPHlGBflRg/rutI53pvwNypOs+ldNV6IkCHcyFiyPPSbLjknnq7CK/55MBAgicyoHIcBoHqg/kZAIyQ4AgXEZjBGhkAspBgCBcRmMEaGQCyvE3wKs9oMpuhbGv/cD4sdNbwQRUpq8BUqf82+VushqfA1XaS2PfA9RnNl4dY+E2EF9f94FeQasuBwG6XORAgAhw4ykc+5CJfahU3fS8eo8KRAXCFFjK5kCjZuLUuZqLqoFTIAKs+uYB2+ex52Z9IAJEgM5+MuXFMxE68qICUYGoQCc+KPzrbYx/5lkTzi2C3JiVL5Pk5/hHy/Tr0wSoPN+vxkD7QBAdDmPfr8YgwDoPIhyiApmgAkG4jMYI0MgElIMAQbiMxgjQyASUgwBBuIzGvge4qs4Ya1XHnJXJ6Zrri1azFNczEVowb7gT3c4s7Ek83EbykWjNHxBuWViUSJTEjp5oHECrTycI+Z4oMAigrOqIAJnFEStQVvkI0D1AjBVtpS77fBqAUVQ+2xs6W2zd7uWuhwDFILSO3JeyOGgQWhrKF8Mgw1sYZUZDSJdjSWuSPLzdm5v39ZOHK5HM002hHZokT3j/T+CfrE/uYZwyqwCkb2iAfU2SX/qkAs77LZduC92wgW7csAle9cn6dhhyL26HobcefTuMUJ/Zdhh/Aa8h4kMUyt73AAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    );
  } else if (rating === "12") {
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
        {/* 12세용 아이콘 디자인 - 색상이나 패턴을 변경 */}
        <rect width="16" height="16" fill="url(#pattern12)" />
        <defs>
          <pattern id="pattern12" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image12" transform="scale(0.0144928)" />
          </pattern>
          <image
            id="image12"
            width="69"
            height="69"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAE40lEQVR4Ae3cXWgcRRwA8HvxqQ+KLwVfFEFFcrMXNQn4gZr2xUp9UPx4kBZqxQc/QKQKFqEI+lA0taD0SciDH6CiVrNzH2lo2krPEFutQpOepF7T2uzs7t31cruX+9yMTHDL7WU3O3O7d7ntTmC4vcvs3uxv//Of2Y8kEnH4WYL33S4lBoelxODjN2pR4+AxBQ4Oyj9FtzowWD+WJwZiCAqfI1G4hqCAw1QkEcwjCN5bTg7calX5/50cF3aHCWSDfc0qE/feZUFCcWEbEoGxwUqhiiYEwQJKCVvWkPCZB25CECxxHGtKkSAYWwNCYnQvx7HiEA8JggpKbd0SQSKY4kDrgdaQxNhoJIwjFm1ASBC8FqGtHMZ6chy8z4E2mu/FhQ85ULeBlKlRXJjZ61rUEzvXzaUK6d2u69Fsm6ZO/vSL677fNW34EUH6pW/x6uqqa9GzX1saqF/8wnUdmu2y1NEufGJpQ/eBEkPYqJepdrQdqLKUolqPBcCtrp79qrdAxT/epd7JUAJV1RkO5NRPlant2DAMDuQEpP19hBqH5IbQdbGG/i8Hcoqewq8vMeGELoLKl496Blq5mqDeRq3wJ67mZm1LrThHvR39ny97MMwnR7DRqFA3ypybeMlB6vSTjjuWP72Lui09mQct/3WAukEmjtcuFiigWv4sB3JKzsrxJzrCCU0EKVPbLGff5cUfqMHacxBLklandzjnoDRDDupJkm65fqJnPtt0IJYph7Yw7ght22u8Xu7wAlT8fR8uZY5QFWXyEccdq+bOUB8kbf6Q43b6Dsi2QS3RSfN7bX6MGofkwcLMy+EByp16hgmnWVHYcMjB2swuRhMhTnXkxDCulxaYgIpn3wwPEDllaJ2Eui2Xr/zMjuNHBGmZT6kb2j7MO0WH2+eFmVeov5PANfQrGCVHwgEkpx7GzWqOGsho1nHu1HOd4QQxgipomhqHRI924XDnOEEDYj1JruZ+84YTJCDl+A7q20skcpq1IlaOjYYFKIZr184zda3C7KvecYISQVqG7eZAefE7f3CCAJT75XlsGE3q6Fkb0hNDIQFKjuCGfpkax/OQTiKmvXg91ejmRLG8+D01DknMpfmx9TvYvsOs7/sVqDD7OhOOL0O6HV4/ApGrlmSYJlFBU3wb0oMCRO5/0cCYdXwb0oMAVDp/kAmnfOkb//NOK1Q/dTH1xFPYaNaogepaFiM/h/RWGHO5b4Di9+P6coYah0CqJ5/ubvQQpH4B0i+OU+OQ3FOa+6j7OP0ClE/vYXoQq6qke4PTD0By8kHcWJGpo4cM6fLko+EBWrmapMYxh3Uvr8xdczNzUPHc/p7idJS7vAJ5ubNq1LWeA2lzH7N1T69AnZ6syqmHeo6zKRHEgcwZpcMrB3KAMS8scSAO5O0P6ngEuUTQ8rn9ts8u2z3TXJo7aBliaR+e8rNePr3L0gYzVTi+eh3mHTfsAhuY9TiQzZ2M1oPLgVyBPohIIsgFJuRbj24PliUovB2RIDjJgewjSYoLz0ZkCN7iQPZA6uQ9t0UKx+68GYlA40jtSODo9X+yhMToGxzIAqSrMHb3dSCyIEMwzpFMpOhOC475RhaFfZIolMMKRf7Rm5QYGDY9bF+zP95xC0oI2yUI9kgwemAJRg/fqEWG4JA0Ad5BE7EXVBgdsgP5D34HlgdcQYalAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    );
  }
  return null;
};
