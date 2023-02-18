import React from "react";

export const SideBar = () => {
  const imgUrl =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAkFBMVEUVFRX19fUAAAD4+Pj8/PwTExP09PT///8QEBANDQ0GBgbT09PNzc3x8fHl5eXu7u7ExMRlZWUgICC1tbW7u7ve3t6vr699fX2IiIhOTk6kpKTIyMiRkZE/Pz+rq6ubm5ttbW1aWlpkZGRCQkInJycfHx9SUlJbW1t2dnY0NDQvLy+enp6VlZWCgoJHR0eLi4tT0VkZAAAJ4UlEQVR4nO2cC3PyuA6GiWzHTkIglDsUSoFS6PX//7tjOzfnQoCdL3XL0TO7M7s0YfTGsiTLDp0OgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgtwKs21Ae7AOS7Ftyr9EiRE+aDwhhBf/1+/RyITv/Qdz5HBJXUrNaTBbj7rjXj8Mw34viCbTOYDPfoOvMiGt23wB3GYLY2qYHg6Pw7HLKaUkRf435dyJpuLGb2wFeIuING+8ucEYxqSyt81i7GpdruM4ShWRA9ddRstuMA45Dxcd6/rg4FBHWccnl21h+l8hnfH5PXA4JfJG11XCwmAxO6w6kLL/mnV5/xXsuqd3IsRRz95x+fAKeczz4eUYhbEy/VR4b/T5pSJJNnmlJOW2byN+i0P8exiMEysl9LHJFqanKJxmgXJGpUtJc4LHlYwgShcrpjw1xh98JVrXcB74pE4OXXkN1zIfHqZdJx00OdOc5XQPIM46H4PRyOLgMegRQx3pwllLpacNIpcmbiyfBA0+35Q07a6eqM3i3sqxqM5/NofOceQ8qb1ODttp0ec6iCh5hPcXqzhnq+j5Mp+fdIKr3AfjeZM7tAqDdVEdGdc8ajnb/KOcbMk1KkR2N1oaU9rm657MbzRcHispk3UgeraoruCYavAqgUXa//bUo0bscSc7qYPFXzDvyhjjxtOwV42QMLQ3duLEnRLhS8FA6ZK7EcmGTUoIn/aQGuzBxJAt/XUIpRAJwwdr8w6mJXWuQydZYGFK27bLaRpIpPm9b8gFwK5XdGyHdkujB1eUCG0Bo5JjKgN36cgwgOOYG1fQ3jR1SX33hpZvd0vyWOe7Pkz9AIVUnrnXEnRaltqmJW2fZthg8EgrN8urRoYcxlZba9lcvNSY5/CDL//mw6aXa5Me6zwWQiKDp8qcjW8/mvLme2uO6T3nBuaj6Mqs4MG2MG6ELorrGSaLrGw6lnjJh4u9WBs6BjOeGth/ztMZn8I8KGjj0RsIVrq1Xpq82ii+LFZhMlzTRB0JIMrkkN6amPORjl+L2lRAMS6QbkvM+EIPv6HvwCDICuIhrAwDC7Un+a7UWP6cGm5JwtnuMMrcwKFLa3HSwKhU5NpHDqQ5HCk82kOxQJYrGxGaQzV+kEs7M8jQnc1lT2Kld8o1DHzRqQnwtD8oVx+FMXe0U3v6w2H2oaoIrOPNMz38JBi8l+UROvRqSg1YcMMte14s36xZifV+iiyzjpkcKh+26PRNaa4euLKV8v9hmz8Fl4QnP/mTXE2lomXUtS4PnlIzSQ9U/g4KlQsf+nU2ik5h0h1yJ4RR9n1dsN6SzuOIWpPDrl8Ilc6x9vkzWBqXFQZJvOWuaa9EScnHSoYBmcFyq6VXBqt65yosK+i6WJxN0r6EVP1TKs4gw0Bm5ZMqiY1QQT+2g1r7xD4k2XUyXLLiH3k6HSP76sJM3WZRaI2NB5vpY12vjkFkXNgvV5F5wdNnllOet8qnSVAQF8030+/3x5rHDxvDL8nBL/3Zf02/h9prOMQY6a5QetF3Je5pHVUNZGBEnmoLxsh5zY3fH8Df5u0SYy1Dv7W4xXBZbbSC4cAqzlbIkgyxXWvCrKb0ImR62ExnUlwU9MstLm9llqKdmpmVe3vf7tgxWNSp235tjrMPJa4XlpqbMtXld9Da/Y+8BCU7uxMPJlV1dAv7aSxu3HdoMWv5A2MZMAJWtziFD5qqL4ecn8VYr2Y2y/rE36TiVIFWSNZGjynci9pKRqTOS9/tuma1IabHiu3XiTj5wacxeDDNxto9W4vIR5B4pt18LqN7SRz/1I8bvqNuLM4hRmwws0G5SDFI/V0X5haBsrgkfYtTMnLqs1lmoxli+eFsyJCTM04vxOYygTEoBpW8IoZ1PqrZ4JlDTaPzcyr9WtfurqtYcbMfabTIhZHWZH0df2i2+Mjq3LCwfOXBBzaDptmqVRt3InvUzGwghQ8i/ixbUDi08fRAmkbpzOaesr8p9Ftl8s2MESdj8N5BX33MrnZJo8+lBV5x7ffTmMtQt9gIYYVEryouow3mFvZBqoh9fKXNlMDyqsLR/dVCH93s/ukxEF9GwGyusdKk35A1foDC+LyVO+kLmreW98K8mCwvWJ1cS3q+vZTA/Lz9yD/KBouHPJ7KICLAaE5vL5THfnIEJrS3/yMnfzbtsoarQcFvT8aSvFh71sDELqlWbO5u5ZvKsnauVPuCFZJ3N794dilYiIf4Vn6yp05k1tPRczXvMng0NnWeK/mviSS+cnsnVbw8CPY3dVVF4ShLeNMGSLItyDfW1MF31r16mtW0Lln1tEd89ddFk1lyso5Pa45W/QzZfhQJpk/buopQ5a3KxvhVScx71U59eYa2RlZ7uLPHdf0E8QbVzsS5U3IFxIv+bvphT10yq+jwezGqX60xI1Jmc/SKoWPM019OF9aKlXS11pstJsszVbERebI5etVwxI/F3g4sS4oPunifjIIzBy9YfiYiVVffK6repw8WWztWm+yQkPHHZNQNztWDZj2mxV1pb3zGyuIiIfZMslCvgNS1zDUszxuxutfrMli8dLTYbNdRhQSL0XLcPz8ixaxw9ZpG7LS6s0+tdXRGcNejZdBrChUysOTy6PlOWJG4c0TKZzV/DnUgmnSHUpzLBw01hd7USXaLr4/w2u8tLl/9KSWhFufQpoIpPxdObzjHoJfnUt0/MfU/IFaUdCMljowbjVCRhRJCq0eeG9DLK4vqOhA5ahNL7UY2q+vA/r0bDOc3tJbjAbepTpwCLY5c3r8XN78MqVf2NtV1/FOgXgN0Xy/acPtLZvqMllV1HQ8Gi8kna6Mfrl/AsatOvW0AN4SKG9D1t8Vs3olfl2up46gPB9hV1yKi4zruxbbun0UVK6Rhl+9vo/bDSPNuyh9GlWJkeLfq5BKEru9W3ZIk+5p3iN6loHVHIO8CtYfHP+9W3YKqTrttM9pBv7lhcZekZVTDouFA0h9HqaNWDxu1iVq+ksv7mH8Upa705vodIT2T9H7DG5StoNQ199r+Mkqd7TP77SHzHbnid4T+JqqhSZ/uVZ06dMBrzvjcCRARi4dx2kauXvm9jpzuPIR3GzLVMSyrh09bhTFXdVXuVJ63IvR4p2tX9TYAveK43F8FptTy24Utol5ctP5KdnvAks+sHc5sGwb95l9z/NOIN173e4B3Ahz54o6n3cjuy3etIqfd/ZVh8e8Ry3/8beH34O4C9pL0wBhE/XsT1+nsB/qwFfN2jacG/yje4Un9ZByD4C6PA8BgeQKAUc/6Lza1AYO3ZRD1Rt6dlikCXp4f2jmc9Rtg7JoXFhAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRDk/4D/ATx4c3puZvDZAAAAAElFTkSuQmCC";

  return (
    <div className="border ">
      <ul>
        <li>
          <img className="w-20" src={imgUrl} alt="icon" />
        </li>
        <li className="text-center p-2 my-2">
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <div className="text-gray-500">NEW</div>
          </button>
        </li>
        <li className="text-center p-2 my-5">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </button>
          <div className="cursor-pointer text-gray-500">PATIENT</div>
        </li>
        <li className="text-center p-2 my-5">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
          </button>
          <div className="cursor-pointer text-gray-500">FOLDER</div>
        </li>
        <li className="text-center p-2 my-5">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
          </button>
          <div className="cursor-pointer text-gray-500">Upload</div>
        </li>
        <li className="text-center p-2 my-5">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </button>
          <div className="cursor-pointer text-gray-500">Report</div>
        </li>
        <li className="text-center p-2 my-5">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
          <div className="cursor-pointer text-gray-500">SETTINGS</div>
        </li>
        <li className="text-center p-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </button>
          <div className="cursor-pointer text-gray-500">LOGOUT</div>
        </li>
      </ul>
    </div>
  );
};
