import {
  TURR_SHOP,
  Car_Hub,
  POSTS_BLOG,
  Japanese_cuisine,
  Cloud_dick,
  Job_Finding_App,
} from '../images/index.js';

export const Bio = {
  name: 'Bogdan Zinkiwskuy',
  roles: ['Front End Developer', 'UI/UX Designer', 'Programmer'],
  description:
    'I possess a strong drive and adaptability, constantly seeking out fresh opportunities. Fueled by my love for acquiring knowledge, I am committed to producing top-notch outcomes. Equipped with a positive outlook and a mindset focused on growth, I am prepared to make a significant impact and accomplish remarkable feats.',
  github: 'https://github.com/zenbogdan17',
  resume:
    'https://www.canva.com/design/DAFb26cYOZM/ba8ZFXwgX04-Duwj_yvBWw/view?utm_content=DAFb26cYOZM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
  telegram: 'https://t.me/zenbogdan',
  mail: 'https://bogdanzinkiwskuy2@gmail.com',
};

export const skills = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'React Js',
        image:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
      },
      {
        name: 'Redux',
        image:
          'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
      },
      {
        name: 'MobX',
        image:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWElEQVR4AaWTA3MlMBRG9/etd2vbHXaM2ubzq23bHtS2bbun6dRWnHw3J7zfkGtVicwnc9UlgK/khwDpf5BpvDxBaMLmBUCMMZT6QoELyDSfmax5pQkbYfsMIM6UoWw58+PjDPgYgOIRQPKPnZkRyuPj6AlxuNUf3YEGK4OdNLuZgFrvblwl2tJ/Quug1dMMlJov3IHY5vIlwNMSFvpY8v8LET84nOxmKtiItaEOWjwEQPEWwM0UVgepC3OBZDtGR6bp8TZifaj9nQBXE6gJY7a3nZPBesrjYjiK/C+Y796BAET94nh3i8OdTVKczDmXXN3B+wGy/5yVB5GvUtPnawjStwCxplAdwvr02NURFFqcSf4z6Gfw4BnHcmUQb/L8R+pODic9LJJWD/OrVR7tbjHNkwKFglZ/xyv94RE0OYrSZDdSixOp9rNf+VRypR9K7vSvO9NX3fkCCSL5JEdZRsgAAAAASUVORK5CYII=',
      },
      {
        name: 'Next Js',
        image:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=',
      },
      {
        name: 'HTML',
        image: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png',
      },
      {
        name: 'CSS',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
      },
      {
        name: 'JS',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
      },
      {
        name: 'TS',
        image:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADqUlEQVR4Ae1XA7dkPRC8/+Kz7afPtu21bdu2bdv27rNt27ZubepMes7D7Ky9fU6fZIKuSqeSuTEcxkUajkPdJykvUg6HYR6mKk3HYR64ke5giWmqEhprkvMkH8NwUBUNDAJb6zfBLeCKhK4TmwSKdGc9O5Qrpjc6A3TGJbg7iKUxi0gABGQpqb+ZTgySYCaIaci+aIa4RW7FNLQ4bikBB73FxGYGcDv9AYEHBO5cAjyn13TVNpnrRB/O0nZsw1aQBoGuymWOswZ8c4g7XhvkhlcHurHk74Y4NycDXO3LA1zxykBXfDjGCz/N8McfcwLx/VQ/vDfKC28MbkTWNgEGYYD5R5MQnVEGv4RiBCYWIyipBMHJFmedbX7xxYjJLMO0/QkE5mrRdkkIToXmIae4GhXVdaiqqUdZVR3ySqqx/FQKSdjXAFP4Yj9XnAjOxZXaXt9sPNztLIZtjYY9I/GGW2E7A8OYATfMPJjIVcI1qgAXIguQWVgFsdT8SpyPKGAfM4Jxu+KYORSU1UAsMacCcw4nYvSOWMxSsXziitScfLw1xLoN9kX4lirf1IOf73cBe32yILb2XBqe7nXeOufF/q7otDwMNNM0UV9v4o/ZgXi8xzm8pLbmmd7n8fpgN3yrtMAMX5UIOeElBbBPpVls3fk0PNfnAlxGWPvReYWFAMFpE/fE4fm+F/C6OgHvjPTkONbtiNAegQGXJiBH7pNx3tYtEBKHAnLQcmEwxUlhc7xk+UpuQvsZeFYTaDhm5PYYiNVpEjQ3pZX/FwRzDLVy4wmIeHkUe62JQFxWOcQkG6YqBm2KYizGvLEEZEX8LQADNkRS+aDV1pmglVTU4qtJvnhDCdLpRhEQcAZ9TQvOSc/h3vNCa0hi2JZoipNxb1wG5Ij9rK5eHjmO53knEG++YrVysXG7YvFcX8tc+Si1+0nuZIvAOSGgCep7gKdg9dk0Hkn8NiuAwsMur6xGomyzJMRUWmFc09BPMbC81gywnwHbLwtFQ6usqRMBivF6510gWKYh4CyZjWvJAMXEvWf6YzLLZaViVvFtcs2gPkzeGfI2aPI00x02ssFJBGi3NBTtlX8/zU/+1ThXxihCnvh3fhCPG8bujMUodS90WxWOzyf6mOq6JjgJ13MOseVxqp9NBHe/5H8DV8lU0ym6huAN/z94473Q7wKFRhEyezwh+uzLq0g/Tp0mBxuskI1yGWDa/NjQeqA7CaiNq9tJjxF9CLCAa6xJzpNDjIuEJY0NJaLCJgAAAABJRU5ErkJggg==',
      },
      {
        name: 'Sass',
        image:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEXMZpnXiLDhpcPmtM3pvdPgo8LSeKXWha3qwtb78/f+/v7////9+fvObp7akLXx1+T57fPtydvlscvjq8fuzN3v0ODQcqH35+/dmbv14evUgKrz3Ojblbj46/HlsszPcJ8unmQ4AAAA4UlEQVR4Ac3RVULFMBQE0IlV5qbuAux/ldiz+i+cNu4J/oLSxhoX4FgYxZQfPkqwl2YU5kWpqyiWGltBw++BCr/ajttVev/d/Kq0orBiKEOIl5rBtt0utzX6CUszabCQTEyx9CbZar8TDZZSkd8Bt1FtGfMdK058+5s2lTaZZ6a2F0iOt4yta3t0z4UUuJQsd3UoqVl/4JL23YhL4xA7WxdVe7qKoa9c1cQpDs35oH8fKOwO57A0GKnwreoP2zXQ357YqYMNcgKSofvNV9jrxaJtpMcZRZ/5y8u0ed6k+Ke+ADR+CkbTLenGAAAAAElFTkSuQmCC',
      },
      {
        name: 'Tailwind',
        image:
          'data:image/jpeg;base64,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',
      },
      {
        name: 'Material UI',
        image:
          'data:image/png;base64,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',
      },
      {
        name: 'REST API ',
        image:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADF0lEQVR4Ac1WA5AcQRTtGOcdnG+mpxTbtlmIbZZiOylEpaAQ2062dmZj2ywEpdjWf7U9mzNnrvIOXf0bv//7mM8ywiFPfMI2llCCOQDc4/XEJebwECtkqcZy05NUhuUBPkkr7VeNFTMZK8xyCrDgV4wnpsIHslzAUvT+OJ+59ZmjAF1wgCz4Q2xs3CvLYdliT1FCLZWvxzlLMQ7hHpZbHAqNUSyF38dlpqqPZ9kAKR8rlD/whkarLK8wZaOnuPBRVhfuD4uTibWHAdZ4b+YEVjJWxFT5bGLip1/m0zL3O5+CffQ3F+eYk7AkXsOv8B0ZpedqphfHus+j12I5BQLMJ+kdLUlr4o1KLGeG8GikYhqKWVzJjFITcqynliMFj8harBnFK5iS0cySeXs8lqXG7kg9kqgbTVb8hg8xUvQPTze/ZaMt+foi/X3AiHm6rMn6jOB9Kv9CewcgSzIrQEXBBG1eRJsviWA6byp6q+TKIU/9l/wRtL8rPf5GwBDjFAXwAr+itSE2CrLsAq4gutYFLuDbTIXXhxwWi6x4RuMsjJhDLpS3ov37yPJjtLbaiuQacwJgByNoF1bPwhwj5pAH97kJmwEaX5CVRzEmY8B1oDC1yzwG3Adov5VcOQXcbZZfQE5bCv8FxQhOO2Uhzx8XqMYIO+jwqU32mFEsP0Cp5RdpuDPgDn5OsHCMuQ3xef4ZLFAor7I+HXMwgRLubvDJfEgw+OxyrfDj9pxK7zCX6edeofiqJWtVKPp3BWo9/ygeYboX/eEJHgq8H4LuOajrqPkUC/dJ/l7If6Ipccl6vb9NtalqaFDui1j4aMp8zz838EFuleADdrAJN7wBE2ZYvBRoRI2vQn6EOQ1flBFBCr4lD76jCr+CB1iqVgfNCxSL+vD9QERSlLPFR+K9ghRLxlK06UT9y2QPem33DwGW9H7MSZDC3aLmf7M7GgShV9JrkmwmaoLtGsHCAeYUoBDtlPC/N7MiZX+k8FC4zaFuWOuMS7NT7xET9l6kKHMCKLeodmSVBSsz3RuRZNDeE+SCkz5Fq8z+d/wFbvfHWf586qAAAAAASUVORK5CYII=',
      },
    ],
  },
  {
    title: 'Others',
    skills: [
      {
        name: 'Git',
        image:
          'https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667',
      },
      {
        name: 'GitHub',
        image:
          'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      },
      {
        name: 'npm',
        image:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAFVBMVEXLAADaSEjnh4f////yv7/87+/gZmY8ie6OAAAALElEQVR4AWOgEWBUggMBsACTMRwoUCbg4uKKKsDAwDLyBBCBzMDABgpk2gAAdjAkZFFl2WsAAAAASUVORK5CYII=',
      },
      {
        name: 'VS Code',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519',
      },
      {
        name: 'webpack',
        image:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFbUlEQVR4Ab2XA3Q0SxCFn23btm3btm3b/G3bthHb2t3YtrMZ3Xdr0mdO7Lw++ZLszm7X7arqrupd+joACLuTG8haMoacSuxnQzaUgV3J6eRPkktkGCSSvE4OHXQhABQ4inxIkppNmO5qE7n1FpKqTBQ3WbAAL4Ct5AGyryNkEAwfQJ4kAaYFLYdGV+cYGO3SkFBpYkW2gcnJOoJLTdRokFFN5pNryB6k38b3IjeTFRZQX8ZVbiswMMGjYUSShlEUkMjVi5jhfD2Cr+ek64inqCYDMgrJMHKWCl2vDe9GLiQTSWmtZiGEq5uaotuGR7rEuBJAY6soQAly/i7L0pFea0G3IwMP+Ywco+bv1t0nkh9IhteAJS6ey1WNbGd4pMLDPFiba2BYovPMETLOrWFjnoHCRqqgFgDB5DlyYBsh6sXB5A0SRdVGBtUvy2ac1WSOYfV6ZpqO8DITaeVNSK7UsCHfxFi3POsoZBLzw6/YRFWzBY4GsobcrrayI+Ap0qSZwM4ik4Y7n2wyw+BfYsJV6sU4nxxcPywcz82Ix1Z3BVyVBlbmdC5acmRGqo7MOgtqJJDjWwt4RR6VMNFSayyso1vHqBUJ4z06thaa8FRomB9eiDvHROK4r31x7Fe+OOZLX5z5YwDeX+xGUGY14itMLMw0HG8J02k8lHmUzR1Ur0NGOjm5vQBrU76B5XR9GkPgYnwXZ+r2qpIqdKxLKMXjU2Nx4jd+tuET+FeB48nRFHLBr0H4aV0aYvLradCwd8X2QsM2HMGQSeiy6IUuBUjS/JsoK9bki/YBU9ds4o8N6TjxWzHiIwa75Piv/XDEFz647t8wBKdVotGAnaiLuBDxyGiS3YMAJ37D+FdUx+bWYIenHN+tScW5vwSKyzsz7oREwjM/rAC+yRXIqvRifoaO4WpOhpXe6KUA+RtRbuK71Sm4fXQklkQVYZu7HK/MTcTJ3/mLMWfVIuqyP0MwYnsWArnyHxmGy/naJ7WqJR8GIuDb1ak4/HMfnEKjr9L4VopYHFmIe8ZFiQg7AT9bngy/1EpMDcjD9cPDbUGn/xAA37RBEnC0cjsnZhiC8D3D4U+D0wLzsC6+FKtiS/DI5FjbG8dRlCTlGT8OgYDWLpdEC8+qxj9bMm3vHNNqZwypgNZJtyiiEM/PjHee/68CBMmFF2cncPVDIGCYEvALM/oIJiFd32sB8vrsnwIQlFHNbcg5ey9A1XYyS04tfjilpAE/MOl4yknsKaRrAdwVEhrZIXxWhIomA74sROPUsd6jgPUUIA1HQHFLuxVQYkpVlPPdPuffW+QS14qQNgKO4ulHESxOYZjknwtXmRc+nEOOdWndpL7I/xTQ/VHsqmr5cFyrPkCUyxEqNUEq3mZXOZ5j4p3Eo1mS8FlWQ/HOn5syEFfYgNAyUyqfU4ikTG9kjcmg4VgupLSpcwHPEo2IcfkSQ9FJk+GRyUx4KnUs48kYllGFpXR1cFYNYjj5vAypgh2bF9YXJqOOSvYEarjICa0FHEE+Jx7NhCVeWJKlt0zQiZCJbDJ8iqQJtewavzTLUM86+6zGHsNAudfuz5oB+JCHyZ6kQ89/NhlBCpk/tstmp9OdnaxKJk+qkp6w85ZMvCh9RX6DBZM/AOLJu+SInnrDPVRLPZ9UyyoDmYxTOmtKq9o0pY63xHviRd2EjGzyW59uTwCEfcmDZJtcOqRb2sxkGtdVW05mp+n0mtOWV5Bp5BLVaff7YnKYalhjDAuGbKMV2cyPVhcTyQnxUrXmNJ5ryR1k78G8IZ1EfiCZXhN2/OWWJCKKpPUGdAAh5Dly0MAM93xpmUBK1KYyibvHy8cgCxHX3kf8yFxyAdm1P4b/A0Z/xtcyYURkAAAAAElFTkSuQmCC',
      },
      {
        name: 'Postman',
        image:
          'https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667',
      },
      {
        name: 'Adobe XD',
        image:
          'https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667',
      },
      {
        name: 'Figma',
        image:
          'https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667',
      },
      {
        name: 'React Native',
        image:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADI0lEQVR4AWIAASUlJUD15eArSBCD8ftbzsazbdtGcLZt27Zt27bDs2309nfYd5vZp31O0mTSfv3anel0uvU0WafJG02kguUNsYj5L3gDTV5hrGQhZgMSIBupIllXq7htt4lJkYTd1yXz6nuJ33FJ3DsPlLoNGyk4dNjAgMUH32ISeFerKEADG3tJP/9CfIdMk5ZhseLWoZ8kHbwrSQfuSMuQaB3HGh029479wYrf0On4wlFkEkUm4Na+j/Yl15Qv9R8xi68Up7wOiLZ+J/4jZys7gy8clhMIGDNfgiYtM7U553WUzGsfSIS1KSZo4lI4rCcQPGWlBIxdYGpzSM2XrOufJOvGZ9aFfgAclhPg7MPmbVH0LQLDJfPKW7YXYY1OweELR5lqIH7nFWNhtrSh2CRq1SFpERyFSNTqw1oR3pX6LVoZsPi6tu1lPQHbmFTJuvlZAscvkrgt5yTt7FPJvv3tn1ADiEEHBiw++LaKTCxlAnXqcKYSveYoBJJ966vErD8h7p0Gsp3auX+U5v5hChE6bGDA4oMvHHDBCXeRCTRx95a4bRe5v9xjaeYbTBFJ6Mz1Uqd+A+66+A6eAtZMsIEBiw++cOg9AW5imCZAEWVcfCXBU1dK/eYtdYBdfIZkXHotXr1GSsqJ+9pdb4yergeppJ56xBodNjBgNZ83+Oo8cMJNjKaefmoCMRtOcW6iHkldio7t/FdQnKvh3JFWEQnYwIDFB1+Fjxgcj5IADaVVeBxrRfyGzcCudzqPbkOVBNBhA0NnxMeMi0ThqrgdaNOz6B0Yt1CLddKkBoIihPOhcOo3ayHGGnijnesoQw14dBmk14BH18HGGug9WqkBOI01YOkW3C32FoCxdAuqvg+YDyOGTph+7nmxnRCM2gkr4i1YeVB/C3gX2Hps5m9BTX0NKSKuTcXPA9YnIsTSRGR9JmzQUO+MBGYmZO03fAa2Ms+E6lR84WXBVNy+r/DaUXAtQ2J0HGt0CBiw+OBrYSpWh5KC/4LLdEA6noJDhw0MWHzwLY5f/zGpInlXLX7NGlbhz2nD//+Q2Ym3lRCYGMRqQOxf2fgPNW7gfRgAAAAASUVORK5CYII=',
      },
    ],
  },
  {
    title: 'Backend(basic)',
    skills: [
      {
        name: 'Node Js',
        image: 'https://nodejs.org/static/images/logo.svg',
      },
      {
        name: 'Express Js',
        image:
          'data:image/png;base64,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',
      },
      {
        name: 'Firebase',
        image: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
      },
      {
        name: 'MongoDB',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
      },
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: 'TUFF SHOP',
    date: 'Jul 2023 - Aug 2023',
    description:
      'This is an online store that receives categories and products through an API. It enables users to register, search for products by price or name, place orders, add products to a wishlist, and offers many other features.',
    image: TURR_SHOP,
    tags: ['React', 'Redux toolkit', 'React Router', 'REST API', 'CSS Module'],
    github: 'https://github.com/zenbogdan17/INTERNET_STORE',
    webapp: 'https://tuffstore.netlify.app/',
  },
  {
    id: 1,
    title: 'Car Hub',
    date: 'Jun 2023 - Sep 2023',
    description:
      'I created a website using the latest Next.js version, specifically Next.js 13, for a car rental service. This website will utilize two different APIs. The first API will be used to retrieve car names and their respective characteristics, while the second API will be responsible for fetching all the photos associated with these cars. Users will have the flexibility to select a car based on their preferred make, model, and year of production.',
    image: Car_Hub,
    tags: ['React', 'Next.js 13', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/zenbogdan17/car_showcase_nextJS',
    webapp: 'https://car-showcase-next-js-bay.vercel.app/',
  },
  {
    id: 2,
    title: 'POSTS BLOG',
    date: 'Jun 2023 - Jul 2023',
    description:
      'The Post Blog project is based on technologies such as React, Redux Toolkit and Router. It provides the ability to create accounts with password encryption, create posts, edit and delete them, upload images for posts, and comment on posts. Each post has a view counter. You can also filter posts by popularity or by tags.',
    image: POSTS_BLOG,
    tags: ['React', 'Redux', 'Material UI', ' Node JS', 'MongoDB', 'Express'],
    github: 'https://github.com/zenbogdan17/MERN-BLOG-frontEnd',
    webapp: 'https://mern-post-blog.netlify.app/',
  },
  {
    id: 3,
    title: 'Japanese cuisine',
    date: 'Dec 2022 - Jan 2023',
    description:
      'This is a Japanese food ordering site using various hooks such as useState, useContext, useReducer and useEffect i technology Redux toolkit. The food list is retrieved from Firebase database, the order basket is also stored in Firebase.',
    image: Japanese_cuisine,
    tags: ['React', 'Redux toolkit', 'Firebase database', 'CSS Modules'],
    github: 'https://github.com/zenbogdan17/japanese_cuisine_react',
    webapp: 'https://zenbogdan17.github.io/japanese_cuisine_react/',
  },
  {
    id: 4,
    title: 'Cloud disk',
    date: 'Apr 2023 - Jun 2023',
    description:
      'I have developed a fully functional Full Stack application using a set of tools such as React JS, Node JS, MongoDB, and Express. It has a wide range of functionality, including registration via JSON Web Token, the ability to upload files, create folders, sort them, search by keywords, download files, and much more.',
    image: Cloud_dick,
    tags: ['React JS', 'Node JS', 'MongoDB', 'Express'],

    github: 'https://github.com/zenbogdan17/MERN-CLOUD-DICK-frontEnd',
    webapp: 'https://cloud-dick.netlify.app/',
  },
  {
    id: 5,
    title: 'Job Finding App',
    date: 'Jun 2023 - Jul 2023',
    description:
      'Mobile applications for job search, implemented using React Native and Expo technologies. The apps were created using Expo Router for navigation between screens and the Axios library for interaction with the JSearch API. To download the apps to your device, you can find a link to my Cloud Dick project: [https://cloud-dick.netlify.app]. Screenshots of the app are also available there to give you a look at its interface. ',
    image: Job_Finding_App,
    tags: ['React Native', ' JavaScript', 'Axios'],
    github: 'https://github.com/zenbogdan17/react_native_jobs',
    webapp: 'https://cloud-dick.netlify.app/',
  },
];
