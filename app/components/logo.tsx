import type { ComponentPropsWithoutRef } from 'react'

type LogoProps = {
  width?: number
  height?: number
} & ComponentPropsWithoutRef<'svg'>

export const Logo = ({ width = 144, height = 250, ...props }: LogoProps) => (
  // <img src={IC}
  //   height={height} width={width}
  //   className='fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50'
  // />
  // <svg
  //   viewBox='0 0 53 36'
  //   xmlns='http://www.w3.org/2000/svg'
  //   height={height}
  //   width={width}
  //   {...props}
  // >
  //   <path
  //     d='m33.681 26.844c-1.314 2.325-3.132 4.329-5.301 5.862-2.934 2.076-6.516 3.294-10.38 3.294-9.939 0-18-8.061-18-18 0-9.942 8.061-18 18-18 3.864 0 7.446 1.218 10.38 3.294h3e-3c2.169 1.533 3.984 3.537 5.295 5.859-3.057 1.764-5.118 5.061-5.118 8.847 0 3.783 2.061 7.086 5.121 8.844z'
  //     fill='#5C5C5C'
  //   />
  //   <path
  //     d='m51.279 26.655-2.691-1.554c-0.927-0.534-2.085-0.381-2.865 0.351-1.821 1.704-4.269 2.748-6.963 2.748-1.848 0-3.585-0.495-5.079-1.356-3.06-1.758-5.121-5.061-5.121-8.844 0-3.786 2.061-7.083 5.118-8.847h3e-3c1.494-0.861 3.231-1.353 5.079-1.353 2.685 0 5.13 1.038 6.951 2.733 0.78 0.729 1.935 0.882 2.862 0.348l2.691-1.554c1.335-0.771 1.62-2.592 0.561-3.711-3.282-3.459-7.92-5.616-13.065-5.616-3.867 0-7.443 1.218-10.377 3.294h-3e-3c-0.012 9e-3 -0.027 0.018-0.039 0.027-0.132 0.093-0.261 0.189-0.387 0.285-0.066 0.048-0.132 0.099-0.198 0.147-0.075 0.06-0.147 0.117-0.219 0.177-0.072 0.054-0.138 0.108-0.207 0.165s-0.135 0.111-0.201 0.168c-0.069 0.057-0.135 0.117-0.201 0.174-0.135 0.114-0.264 0.231-0.393 0.351-0.066 0.06-0.129 0.12-0.192 0.183-0.255 0.243-0.504 0.492-0.744 0.75-0.054 0.057-0.108 0.117-0.162 0.177-0.318 0.348-0.621 0.711-0.912 1.083-0.039 0.051-0.078 0.102-0.114 0.153-0.144 0.186-0.27 0.369-0.429 0.582-0.03 0.039-0.078 0.108-0.105 0.15-0.168 0.255-0.333 0.513-0.498 0.768-0.021 0.036-0.057 0.096-0.078 0.132-0.087 0.159-0.174 0.306-0.264 0.462-0.069 0.126-0.138 0.255-0.207 0.384-0.036 0.072-0.075 0.144-0.111 0.216-0.12 0.234-0.237 0.477-0.348 0.72l-0.108 0.243c-0.183 0.414-0.348 0.837-0.498 1.269-0.03 0.078-0.054 0.156-0.081 0.237-0.03 0.084-0.057 0.171-0.084 0.255-0.018 0.06-0.036 0.117-0.054 0.174-0.015 0.042-0.027 0.087-0.039 0.132-0.051 0.168-0.099 0.339-0.144 0.51-0.021 0.078-0.042 0.153-0.06 0.228-0.045 0.177-0.087 0.354-0.126 0.531-0.018 0.081-0.033 0.162-0.051 0.243-3e-3 9e-3 -3e-3 0.018-3e-3 0.027-0.021 0.087-0.036 0.177-0.054 0.267-0.033 0.171-0.06 0.342-0.093 0.51-0.015 0.075-0.024 0.15-0.033 0.222-0.018 0.168-0.045 0.351-0.066 0.537l-0.018 0.162c-6e-3 0.072-0.012 0.144-0.021 0.216-3e-3 0.057-9e-3 0.111-0.015 0.168l-9e-3 0.135c-0.012 0.153-0.021 0.306-0.03 0.459l-9e-3 0.216v0.03c-6e-3 0.066-6e-3 0.129-6e-3 0.195-3e-3 0.066-6e-3 0.132-6e-3 0.201 0 0.093-3e-3 0.189-3e-3 0.285 0 0.093 3e-3 0.189 3e-3 0.282 0 0.069 3e-3 0.135 6e-3 0.204 0 0.063 0 0.126 6e-3 0.192v0.03l9e-3 0.216c9e-3 0.156 0.018 0.306 0.03 0.459l9e-3 0.135c6e-3 0.057 0.012 0.114 0.015 0.168 9e-3 0.072 0.015 0.144 0.021 0.216l0.018 0.162c0.021 0.186 0.048 0.369 0.066 0.537 9e-3 0.075 0.018 0.147 0.033 0.222 0.033 0.168 0.06 0.339 0.093 0.51 0.018 0.09 0.033 0.18 0.054 0.267 0 9e-3 0 0.018 3e-3 0.027 0.018 0.081 0.033 0.162 0.051 0.243 0.039 0.177 0.081 0.354 0.126 0.531 0.018 0.075 0.039 0.153 0.06 0.228 0.045 0.171 0.093 0.342 0.144 0.51 0.012 0.045 0.024 0.09 0.039 0.132 0.018 0.057 0.036 0.117 0.054 0.174 0.027 0.087 0.054 0.171 0.084 0.255 0.027 0.081 0.051 0.159 0.081 0.24 0.15 0.429 0.315 0.852 0.498 1.266l0.108 0.243c0.111 0.243 0.228 0.486 0.348 0.723 0.036 0.072 0.075 0.144 0.111 0.216 0.069 0.126 0.138 0.255 0.207 0.381 0.066 0.114 0.129 0.222 0.192 0.333 0.075 0.135 0.207 0.345 0.288 0.474l0.348 0.54c0.027 0.045 0.078 0.117 0.111 0.159 0.162 0.213 0.288 0.402 0.435 0.588 0.036 0.051 0.075 0.102 0.114 0.153 0.291 0.372 0.594 0.735 0.912 1.086 0.054 0.06 0.108 0.117 0.162 0.174 0.24 0.258 0.489 0.51 0.744 0.75 0.063 0.063 0.126 0.123 0.192 0.183 0.129 0.12 0.258 0.237 0.393 0.351 0.066 0.06 0.132 0.117 0.201 0.174 0.066 0.057 0.132 0.114 0.201 0.168 0.069 0.057 0.135 0.114 0.207 0.168 0.072 0.057 0.144 0.114 0.219 0.174 0.066 0.048 0.132 0.099 0.198 0.15 0.126 0.096 0.255 0.189 0.387 0.282 0.012 9e-3 0.027 0.018 0.039 0.03 2.934 2.073 6.513 3.294 10.38 3.294 5.151 0 9.798-2.166 13.08-5.637 1.059-1.119 0.771-2.94-0.561-3.708z'
  //     className='fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50'
  //   />
  // </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="200" zoomAndPan="magnify" viewBox="0 0 375 74.999997" height="60" preserveAspectRatio="xMidYMid meet" version="1.0">
    <defs>
      <g />
    </defs>
    <g fill="none" fillOpacity="1">
      <g transform="translate(1.250612, 52.101652)">
        <g>
          <path d="M 12.15625 -30.546875 L 12.15625 -4.21875 L 14.703125 -4.21875 L 14.703125 0 L 4.46875 0 L 4.46875 -4.21875 L 7.0625 -4.21875 L 7.0625 -30.546875 L 4.46875 -30.546875 L 4.46875 -34.765625 L 14.703125 -34.765625 L 14.703125 -30.546875 Z M 12.15625 -30.546875 " className='fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50' />
        </g>
      </g>
    </g>
    <g fill="none" fillOpacity="1">
      <g transform="translate(20.518271, 52.101652)">
        <g>
          <path d="M 13.6875 -4.90625 C 13.976562 -5.164062 14.238281 -5.457031 14.46875 -5.78125 C 14.695312 -6.113281 14.8125 -6.488281 14.8125 -6.90625 C 14.8125 -7.4375 14.625 -7.878906 14.25 -8.234375 C 13.875 -8.597656 13.414062 -8.898438 12.875 -9.140625 C 12.332031 -9.390625 11.765625 -9.578125 11.171875 -9.703125 C 10.585938 -9.835938 10.097656 -9.953125 9.703125 -10.046875 C 8.628906 -10.304688 7.617188 -10.625 6.671875 -11 C 5.722656 -11.382812 4.894531 -11.84375 4.1875 -12.375 C 3.488281 -12.914062 2.929688 -13.550781 2.515625 -14.28125 C 2.109375 -15.019531 1.90625 -15.898438 1.90625 -16.921875 C 1.90625 -17.867188 2.132812 -18.757812 2.59375 -19.59375 C 3.050781 -20.425781 3.664062 -21.160156 4.4375 -21.796875 C 5.207031 -22.429688 6.101562 -22.9375 7.125 -23.3125 C 8.15625 -23.6875 9.242188 -23.875 10.390625 -23.875 C 11.410156 -23.875 12.375 -23.726562 13.28125 -23.4375 C 14.195312 -23.144531 15.019531 -22.742188 15.75 -22.234375 C 16.488281 -21.722656 17.113281 -21.109375 17.625 -20.390625 C 18.132812 -19.671875 18.46875 -18.875 18.625 -18 L 14.359375 -16.96875 C 14.171875 -17.75 13.75 -18.398438 13.09375 -18.921875 C 12.4375 -19.441406 11.535156 -19.703125 10.390625 -19.703125 C 10.003906 -19.703125 9.597656 -19.644531 9.171875 -19.53125 C 8.742188 -19.425781 8.347656 -19.257812 7.984375 -19.03125 C 7.628906 -18.800781 7.328125 -18.519531 7.078125 -18.1875 C 6.835938 -17.863281 6.71875 -17.488281 6.71875 -17.0625 C 6.71875 -16.601562 6.851562 -16.207031 7.125 -15.875 C 7.40625 -15.550781 7.742188 -15.285156 8.140625 -15.078125 C 8.535156 -14.867188 8.957031 -14.695312 9.40625 -14.5625 C 9.863281 -14.425781 10.289062 -14.3125 10.6875 -14.21875 C 12.414062 -13.789062 13.851562 -13.332031 15 -12.84375 C 16.144531 -12.351562 17.0625 -11.8125 17.75 -11.21875 C 18.4375 -10.632812 18.914062 -9.988281 19.1875 -9.28125 C 19.46875 -8.582031 19.609375 -7.789062 19.609375 -6.90625 C 19.609375 -5.863281 19.367188 -4.882812 18.890625 -3.96875 C 18.421875 -3.050781 17.769531 -2.257812 16.9375 -1.59375 C 16.101562 -0.925781 15.101562 -0.398438 13.9375 -0.015625 C 12.78125 0.359375 11.535156 0.546875 10.203125 0.546875 C 8.171875 0.546875 6.363281 0.046875 4.78125 -0.953125 C 3.195312 -1.953125 2.125 -3.285156 1.5625 -4.953125 L 5.59375 -6.765625 C 6.113281 -5.617188 6.78125 -4.84375 7.59375 -4.4375 C 8.414062 -4.03125 9.347656 -3.828125 10.390625 -3.828125 C 11.703125 -3.828125 12.800781 -4.1875 13.6875 -4.90625 Z M 13.6875 -4.90625 " className='fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50' />
        </g>
      </g>
    </g>
    <g fill="none" fillOpacity="1">
      <g transform="translate(41.59993, 52.101652)">
        <g>
          <path d="M 7.75 -35.796875 L 7.75 0 L 2.984375 0 L 2.984375 -35.796875 Z M 7.75 -35.796875 " className='fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50' />
        </g>
      </g>
    </g>
    <g fill="none" fillOpacity="1">
      <g transform="translate(51.993684, 52.101652)">
        <g>
          <path d="M 25 -23.484375 L 25 0 L 20.984375 0 L 20.25 -2.703125 C 19.4375 -1.617188 18.390625 -0.796875 17.109375 -0.234375 C 15.835938 0.316406 14.546875 0.59375 13.234375 0.59375 C 11.597656 0.59375 10.066406 0.273438 8.640625 -0.359375 C 7.222656 -1.003906 5.984375 -1.878906 4.921875 -2.984375 C 3.859375 -4.097656 3.015625 -5.40625 2.390625 -6.90625 C 1.773438 -8.414062 1.46875 -10.019531 1.46875 -11.71875 C 1.46875 -13.414062 1.773438 -15.015625 2.390625 -16.515625 C 3.015625 -18.023438 3.859375 -19.332031 4.921875 -20.4375 C 5.984375 -21.550781 7.222656 -22.425781 8.640625 -23.0625 C 10.066406 -23.707031 11.597656 -24.03125 13.234375 -24.03125 C 14.546875 -24.03125 15.804688 -23.773438 17.015625 -23.265625 C 18.222656 -22.753906 19.300781 -21.960938 20.25 -20.890625 L 20.984375 -23.484375 Z M 13.234375 -3.625 C 14.179688 -3.625 15.078125 -3.835938 15.921875 -4.265625 C 16.773438 -4.691406 17.515625 -5.269531 18.140625 -6 C 18.765625 -6.738281 19.253906 -7.597656 19.609375 -8.578125 C 19.972656 -9.554688 20.15625 -10.601562 20.15625 -11.71875 C 20.15625 -12.832031 19.972656 -13.878906 19.609375 -14.859375 C 19.253906 -15.835938 18.765625 -16.691406 18.140625 -17.421875 C 17.515625 -18.160156 16.773438 -18.742188 15.921875 -19.171875 C 15.078125 -19.597656 14.179688 -19.8125 13.234375 -19.8125 C 12.285156 -19.8125 11.382812 -19.597656 10.53125 -19.171875 C 9.6875 -18.742188 8.953125 -18.160156 8.328125 -17.421875 C 7.710938 -16.691406 7.222656 -15.835938 6.859375 -14.859375 C 6.503906 -13.878906 6.328125 -12.832031 6.328125 -11.71875 C 6.328125 -10.601562 6.503906 -9.554688 6.859375 -8.578125 C 7.222656 -7.597656 7.710938 -6.738281 8.328125 -6 C 8.953125 -5.269531 9.6875 -4.691406 10.53125 -4.265625 C 11.382812 -3.835938 12.285156 -3.625 13.234375 -3.625 Z M 13.234375 -3.625 " className='fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50' />
        </g>
      </g>
    </g>
    <g fill="none" fillOpacity="1">
      <g transform="translate(79.105678, 52.101652)">
        <g>
          <path d="M 7.40625 0 L 2.640625 0 L 2.640625 -23.484375 L 6.421875 -23.484375 L 7.40625 -21.421875 C 8.1875 -22.171875 9.132812 -22.789062 10.25 -23.28125 C 11.363281 -23.78125 12.570312 -24.03125 13.875 -24.03125 C 14.726562 -24.03125 15.691406 -23.894531 16.765625 -23.625 C 17.847656 -23.363281 18.851562 -22.875 19.78125 -22.15625 C 20.71875 -21.4375 21.503906 -20.441406 22.140625 -19.171875 C 22.773438 -17.898438 23.09375 -16.25 23.09375 -14.21875 L 23.09375 0 L 18.578125 0 L 18.578125 -14.265625 C 18.578125 -15.273438 18.421875 -16.128906 18.109375 -16.828125 C 17.804688 -17.535156 17.398438 -18.101562 16.890625 -18.53125 C 16.378906 -18.957031 15.804688 -19.257812 15.171875 -19.4375 C 14.535156 -19.613281 13.875 -19.703125 13.1875 -19.703125 C 12.664062 -19.703125 12.066406 -19.601562 11.390625 -19.40625 C 10.722656 -19.21875 10.09375 -18.898438 9.5 -18.453125 C 8.914062 -18.015625 8.421875 -17.457031 8.015625 -16.78125 C 7.609375 -16.113281 7.40625 -15.289062 7.40625 -14.3125 Z M 7.40625 0 " className='fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50' />
        </g>
      </g>
    </g>
    <g fill="none" fillOpacity="1">
      <g transform="translate(105.286157, 52.101652)">
        <g>
          <path d="M 25.203125 -35.796875 L 25.203125 0 L 21.421875 0 L 20.453125 -2.453125 C 19.503906 -1.503906 18.421875 -0.757812 17.203125 -0.21875 C 15.992188 0.320312 14.609375 0.59375 13.046875 0.59375 C 11.410156 0.59375 9.90625 0.273438 8.53125 -0.359375 C 7.15625 -1.003906 5.960938 -1.878906 4.953125 -2.984375 C 3.941406 -4.097656 3.148438 -5.40625 2.578125 -6.90625 C 2.003906 -8.414062 1.71875 -10.019531 1.71875 -11.71875 C 1.71875 -13.414062 2.003906 -15.015625 2.578125 -16.515625 C 3.148438 -18.023438 3.941406 -19.332031 4.953125 -20.4375 C 5.960938 -21.550781 7.15625 -22.425781 8.53125 -23.0625 C 9.90625 -23.707031 11.410156 -24.03125 13.046875 -24.03125 C 14.679688 -24.03125 16.101562 -23.757812 17.3125 -23.21875 C 18.519531 -22.675781 19.566406 -21.914062 20.453125 -20.9375 L 20.453125 -35.796875 Z M 13.4375 -3.625 C 14.414062 -3.625 15.320312 -3.785156 16.15625 -4.109375 C 16.988281 -4.441406 17.722656 -4.941406 18.359375 -5.609375 C 18.992188 -6.285156 19.488281 -7.128906 19.84375 -8.140625 C 20.207031 -9.148438 20.390625 -10.34375 20.390625 -11.71875 C 20.390625 -13.1875 20.207031 -14.425781 19.84375 -15.4375 C 19.488281 -16.457031 18.992188 -17.285156 18.359375 -17.921875 C 17.722656 -18.554688 16.988281 -19.007812 16.15625 -19.28125 C 15.320312 -19.5625 14.414062 -19.703125 13.4375 -19.703125 C 12.488281 -19.703125 11.585938 -19.5 10.734375 -19.09375 C 9.890625 -18.6875 9.15625 -18.125 8.53125 -17.40625 C 7.90625 -16.6875 7.410156 -15.835938 7.046875 -14.859375 C 6.691406 -13.878906 6.515625 -12.832031 6.515625 -11.71875 C 6.515625 -10.601562 6.691406 -9.554688 7.046875 -8.578125 C 7.410156 -7.597656 7.90625 -6.738281 8.53125 -6 C 9.15625 -5.269531 9.890625 -4.691406 10.734375 -4.265625 C 11.585938 -3.835938 12.488281 -3.625 13.4375 -3.625 Z M 13.4375 -3.625 " className='fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50' />
        </g>
      </g>
    </g>
    <g fill="none" fillOpacity="1">
      <g transform="translate(133.672852, 52.101652)">
        <g />
      </g>
    </g>
    <g fill="none" fillOpacity="1">
      <g transform="translate(146.468924, 52.101652)">
        <g>
          <path d="M 19.125 -4.265625 C 21.019531 -4.265625 22.773438 -4.722656 24.390625 -5.640625 C 26.003906 -6.554688 27.367188 -7.765625 28.484375 -9.265625 L 32.0625 -5.828125 C 30.5 -3.972656 28.597656 -2.457031 26.359375 -1.28125 C 24.117188 -0.101562 21.707031 0.484375 19.125 0.484375 C 16.769531 0.484375 14.546875 0.0078125 12.453125 -0.9375 C 10.359375 -1.882812 8.539062 -3.164062 7 -4.78125 C 5.46875 -6.394531 4.253906 -8.289062 3.359375 -10.46875 C 2.460938 -12.644531 2.015625 -14.941406 2.015625 -17.359375 C 2.015625 -19.804688 2.460938 -22.109375 3.359375 -24.265625 C 4.253906 -26.421875 5.46875 -28.304688 7 -29.921875 C 8.539062 -31.546875 10.359375 -32.832031 12.453125 -33.78125 C 14.546875 -34.726562 16.769531 -35.203125 19.125 -35.203125 C 21.3125 -35.203125 23.375 -34.769531 25.3125 -33.90625 C 27.257812 -33.039062 29.003906 -31.90625 30.546875 -30.5 L 27.5 -26.625 C 26.425781 -27.769531 25.171875 -28.707031 23.734375 -29.4375 C 22.296875 -30.175781 20.757812 -30.546875 19.125 -30.546875 C 17.457031 -30.546875 15.894531 -30.191406 14.4375 -29.484375 C 12.988281 -28.785156 11.722656 -27.832031 10.640625 -26.625 C 9.554688 -25.414062 8.695312 -24.015625 8.0625 -22.421875 C 7.425781 -20.835938 7.109375 -19.148438 7.109375 -17.359375 C 7.109375 -15.554688 7.425781 -13.863281 8.0625 -12.28125 C 8.695312 -10.695312 9.554688 -9.304688 10.640625 -8.109375 C 11.722656 -6.921875 12.988281 -5.984375 14.4375 -5.296875 C 15.894531 -4.609375 17.457031 -4.265625 19.125 -4.265625 Z M 19.125 -4.265625 " className='fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50' />
        </g>
      </g>
    </g>
    <g fill="none" fillOpacity="1">
      <g transform="translate(180.101522, 52.101652)">
        <g>
          <path d="M 13.046875 0.59375 C 11.410156 0.59375 9.878906 0.273438 8.453125 -0.359375 C 7.035156 -1.003906 5.796875 -1.878906 4.734375 -2.984375 C 3.671875 -4.097656 2.828125 -5.40625 2.203125 -6.90625 C 1.585938 -8.414062 1.28125 -10.019531 1.28125 -11.71875 C 1.28125 -13.414062 1.585938 -15.015625 2.203125 -16.515625 C 2.828125 -18.023438 3.671875 -19.332031 4.734375 -20.4375 C 5.796875 -21.550781 7.035156 -22.425781 8.453125 -23.0625 C 9.878906 -23.707031 11.410156 -24.03125 13.046875 -24.03125 C 14.640625 -24.03125 16.15625 -23.707031 17.59375 -23.0625 C 19.039062 -22.425781 20.296875 -21.550781 21.359375 -20.4375 C 22.421875 -19.332031 23.257812 -18.023438 23.875 -16.515625 C 24.5 -15.015625 24.8125 -13.414062 24.8125 -11.71875 C 24.8125 -10.019531 24.5 -8.414062 23.875 -6.90625 C 23.257812 -5.40625 22.421875 -4.097656 21.359375 -2.984375 C 20.296875 -1.878906 19.039062 -1.003906 17.59375 -0.359375 C 16.15625 0.273438 14.640625 0.59375 13.046875 0.59375 Z M 13.046875 -19.765625 C 12.097656 -19.765625 11.195312 -19.550781 10.34375 -19.125 C 9.5 -18.695312 8.753906 -18.125 8.109375 -17.40625 C 7.472656 -16.6875 6.972656 -15.835938 6.609375 -14.859375 C 6.253906 -13.878906 6.078125 -12.832031 6.078125 -11.71875 C 6.078125 -10.601562 6.253906 -9.554688 6.609375 -8.578125 C 6.972656 -7.597656 7.472656 -6.738281 8.109375 -6 C 8.753906 -5.269531 9.5 -4.691406 10.34375 -4.265625 C 11.195312 -3.835938 12.097656 -3.625 13.046875 -3.625 C 13.992188 -3.625 14.890625 -3.835938 15.734375 -4.265625 C 16.585938 -4.691406 17.320312 -5.269531 17.9375 -6 C 18.5625 -6.738281 19.050781 -7.597656 19.40625 -8.578125 C 19.769531 -9.554688 19.953125 -10.601562 19.953125 -11.71875 C 19.953125 -12.832031 19.769531 -13.878906 19.40625 -14.859375 C 19.050781 -15.835938 18.5625 -16.6875 17.9375 -17.40625 C 17.320312 -18.125 16.585938 -18.695312 15.734375 -19.125 C 14.890625 -19.550781 13.992188 -19.765625 13.046875 -19.765625 Z M 13.046875 -19.765625 " className='fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50' />
        </g>
      </g>
    </g>
    <g fill="none" fillOpacity="1">
      <g transform="translate(205.987833, 52.101652)">
        <g>
          <path d="M 7.5 0 L 2.75 0 L 2.75 -23.484375 L 6.515625 -23.484375 L 7.5 -21.46875 C 8.09375 -22.15625 8.796875 -22.753906 9.609375 -23.265625 C 10.421875 -23.773438 11.414062 -24.03125 12.59375 -24.03125 C 13.050781 -24.03125 13.566406 -23.972656 14.140625 -23.859375 C 14.710938 -23.742188 15.300781 -23.546875 15.90625 -23.265625 C 16.507812 -22.984375 17.085938 -22.601562 17.640625 -22.125 C 18.203125 -21.65625 18.679688 -21.046875 19.078125 -20.296875 C 19.628906 -21.304688 20.46875 -22.179688 21.59375 -22.921875 C 22.726562 -23.660156 23.929688 -24.03125 25.203125 -24.03125 C 26.054688 -24.03125 26.957031 -23.894531 27.90625 -23.625 C 28.851562 -23.363281 29.734375 -22.875 30.546875 -22.15625 C 31.359375 -21.4375 32.023438 -20.441406 32.546875 -19.171875 C 33.078125 -17.898438 33.34375 -16.25 33.34375 -14.21875 L 33.34375 0 L 28.875 0 L 28.875 -14.265625 C 28.875 -16.296875 28.457031 -17.707031 27.625 -18.5 C 26.789062 -19.300781 25.6875 -19.703125 24.3125 -19.703125 C 23.269531 -19.703125 22.351562 -19.257812 21.5625 -18.375 C 20.78125 -17.5 20.390625 -16.113281 20.390625 -14.21875 L 20.390625 0 L 15.9375 0 L 15.9375 -14.265625 C 15.9375 -16.296875 15.519531 -17.707031 14.6875 -18.5 C 13.851562 -19.300781 12.75 -19.703125 11.375 -19.703125 C 10.394531 -19.703125 9.535156 -19.328125 8.796875 -18.578125 C 8.066406 -17.828125 7.632812 -16.648438 7.5 -15.046875 Z M 7.5 0 " className='fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50' />
        </g>
      </g>
    </g>
    <g fill="none" fillOpacity="1">
      <g transform="translate(242.169832, 52.101652)">
        <g>
          <path d="M 7.5 0 L 2.75 0 L 2.75 -23.484375 L 6.515625 -23.484375 L 7.5 -21.46875 C 8.09375 -22.15625 8.796875 -22.753906 9.609375 -23.265625 C 10.421875 -23.773438 11.414062 -24.03125 12.59375 -24.03125 C 13.050781 -24.03125 13.566406 -23.972656 14.140625 -23.859375 C 14.710938 -23.742188 15.300781 -23.546875 15.90625 -23.265625 C 16.507812 -22.984375 17.085938 -22.601562 17.640625 -22.125 C 18.203125 -21.65625 18.679688 -21.046875 19.078125 -20.296875 C 19.628906 -21.304688 20.46875 -22.179688 21.59375 -22.921875 C 22.726562 -23.660156 23.929688 -24.03125 25.203125 -24.03125 C 26.054688 -24.03125 26.957031 -23.894531 27.90625 -23.625 C 28.851562 -23.363281 29.734375 -22.875 30.546875 -22.15625 C 31.359375 -21.4375 32.023438 -20.441406 32.546875 -19.171875 C 33.078125 -17.898438 33.34375 -16.25 33.34375 -14.21875 L 33.34375 0 L 28.875 0 L 28.875 -14.265625 C 28.875 -16.296875 28.457031 -17.707031 27.625 -18.5 C 26.789062 -19.300781 25.6875 -19.703125 24.3125 -19.703125 C 23.269531 -19.703125 22.351562 -19.257812 21.5625 -18.375 C 20.78125 -17.5 20.390625 -16.113281 20.390625 -14.21875 L 20.390625 0 L 15.9375 0 L 15.9375 -14.265625 C 15.9375 -16.296875 15.519531 -17.707031 14.6875 -18.5 C 13.851562 -19.300781 12.75 -19.703125 11.375 -19.703125 C 10.394531 -19.703125 9.535156 -19.328125 8.796875 -18.578125 C 8.066406 -17.828125 7.632812 -16.648438 7.5 -15.046875 Z M 7.5 0 " className='fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50' />
        </g>
      </g>
    </g>
    <g fill="none" fillOpacity="1">
      <g transform="translate(278.351831, 52.101652)">
        <g>
          <path d="M 13.875 0.59375 C 12.175781 0.59375 10.582031 0.273438 9.09375 -0.359375 C 7.601562 -1.003906 6.300781 -1.878906 5.1875 -2.984375 C 4.082031 -4.097656 3.210938 -5.40625 2.578125 -6.90625 C 1.941406 -8.414062 1.625 -10.019531 1.625 -11.71875 C 1.625 -13.414062 1.925781 -15.015625 2.53125 -16.515625 C 3.132812 -18.023438 3.945312 -19.332031 4.96875 -20.4375 C 6 -21.550781 7.203125 -22.425781 8.578125 -23.0625 C 9.953125 -23.707031 11.425781 -24.03125 13 -24.03125 C 14.59375 -24.03125 16.066406 -23.75 17.421875 -23.1875 C 18.785156 -22.632812 19.960938 -21.769531 20.953125 -20.59375 C 21.953125 -19.414062 22.726562 -17.921875 23.28125 -16.109375 C 23.84375 -14.296875 24.125 -12.128906 24.125 -9.609375 L 6.671875 -9.609375 C 6.898438 -8.753906 7.257812 -7.957031 7.75 -7.21875 C 8.238281 -6.488281 8.816406 -5.851562 9.484375 -5.3125 C 10.160156 -4.78125 10.914062 -4.363281 11.75 -4.0625 C 12.582031 -3.769531 13.453125 -3.625 14.359375 -3.625 C 15.609375 -3.625 16.765625 -3.851562 17.828125 -4.3125 C 18.890625 -4.769531 19.796875 -5.375 20.546875 -6.125 L 23.484375 -3.1875 C 22.335938 -2.039062 20.9375 -1.125 19.28125 -0.4375 C 17.632812 0.25 15.832031 0.59375 13.875 0.59375 Z M 13 -19.703125 C 12.238281 -19.703125 11.523438 -19.554688 10.859375 -19.265625 C 10.191406 -18.972656 9.570312 -18.566406 9 -18.046875 C 8.425781 -17.523438 7.929688 -16.90625 7.515625 -16.1875 C 7.109375 -15.46875 6.8125 -14.679688 6.625 -13.828125 L 19.03125 -13.828125 C 18.957031 -14.609375 18.773438 -15.359375 18.484375 -16.078125 C 18.191406 -16.796875 17.78125 -17.425781 17.25 -17.96875 C 16.726562 -18.507812 16.113281 -18.929688 15.40625 -19.234375 C 14.707031 -19.546875 13.90625 -19.703125 13 -19.703125 Z M 13 -19.703125 " className='fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50' />
        </g>
      </g>
    </g>
    <g fill="none" fillOpacity="1">
      <g transform="translate(304.336176, 52.101652)">
        <g>
          <path d="M 16.921875 -19.125 C 16.691406 -19.21875 16.460938 -19.316406 16.234375 -19.421875 C 16.035156 -19.484375 15.804688 -19.546875 15.546875 -19.609375 C 15.285156 -19.671875 15.003906 -19.703125 14.703125 -19.703125 C 13.753906 -19.703125 12.867188 -19.546875 12.046875 -19.234375 C 11.234375 -18.929688 10.535156 -18.515625 9.953125 -17.984375 C 9.367188 -17.460938 8.90625 -16.851562 8.5625 -16.15625 C 8.21875 -15.457031 8.046875 -14.710938 8.046875 -13.921875 L 7.984375 0 L 3.234375 0 L 3.234375 -23.484375 L 7.015625 -23.484375 L 7.984375 -20.890625 C 8.640625 -21.835938 9.5 -22.597656 10.5625 -23.171875 C 11.625 -23.742188 12.957031 -24.03125 14.5625 -24.03125 C 15.601562 -24.03125 16.796875 -23.878906 18.140625 -23.578125 Z M 16.921875 -19.125 " className='fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50' />
        </g>
      </g>
    </g>
    <g fill="none" fillOpacity="1">
      <g transform="translate(322.868417, 52.101652)">
        <g>
          <path d="M 13.53125 0.59375 C 11.894531 0.59375 10.363281 0.273438 8.9375 -0.359375 C 7.519531 -1.003906 6.28125 -1.878906 5.21875 -2.984375 C 4.15625 -4.097656 3.3125 -5.40625 2.6875 -6.90625 C 2.070312 -8.414062 1.765625 -10.019531 1.765625 -11.71875 C 1.765625 -13.414062 2.070312 -15.015625 2.6875 -16.515625 C 3.3125 -18.023438 4.15625 -19.332031 5.21875 -20.4375 C 6.28125 -21.550781 7.519531 -22.425781 8.9375 -23.0625 C 10.363281 -23.707031 11.894531 -24.03125 13.53125 -24.03125 C 15.425781 -24.03125 17.175781 -23.601562 18.78125 -22.75 C 20.382812 -21.894531 21.722656 -20.734375 22.796875 -19.265625 L 19.46875 -16.671875 C 18.8125 -17.617188 17.984375 -18.359375 16.984375 -18.890625 C 15.992188 -19.429688 14.925781 -19.703125 13.78125 -19.703125 C 12.800781 -19.703125 11.867188 -19.5 10.984375 -19.09375 C 10.097656 -18.6875 9.328125 -18.125 8.671875 -17.40625 C 8.023438 -16.6875 7.507812 -15.835938 7.125 -14.859375 C 6.75 -13.878906 6.5625 -12.832031 6.5625 -11.71875 C 6.5625 -10.601562 6.75 -9.554688 7.125 -8.578125 C 7.507812 -7.597656 8.023438 -6.738281 8.671875 -6 C 9.328125 -5.269531 10.097656 -4.691406 10.984375 -4.265625 C 11.867188 -3.835938 12.800781 -3.625 13.78125 -3.625 C 15.050781 -3.625 16.207031 -3.96875 17.25 -4.65625 C 18.300781 -5.34375 19.15625 -6.257812 19.8125 -7.40625 L 23.046875 -4.5625 C 21.992188 -2.988281 20.632812 -1.734375 18.96875 -0.796875 C 17.300781 0.128906 15.488281 0.59375 13.53125 0.59375 Z M 13.53125 0.59375 " className='fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50' />
        </g>
      </g>
    </g>
    <g fill="none" fillOpacity="1">
      <g transform="translate(347.774194, 52.101652)">
        <g>
          <path d="M 13.875 0.59375 C 12.175781 0.59375 10.582031 0.273438 9.09375 -0.359375 C 7.601562 -1.003906 6.300781 -1.878906 5.1875 -2.984375 C 4.082031 -4.097656 3.210938 -5.40625 2.578125 -6.90625 C 1.941406 -8.414062 1.625 -10.019531 1.625 -11.71875 C 1.625 -13.414062 1.925781 -15.015625 2.53125 -16.515625 C 3.132812 -18.023438 3.945312 -19.332031 4.96875 -20.4375 C 6 -21.550781 7.203125 -22.425781 8.578125 -23.0625 C 9.953125 -23.707031 11.425781 -24.03125 13 -24.03125 C 14.59375 -24.03125 16.066406 -23.75 17.421875 -23.1875 C 18.785156 -22.632812 19.960938 -21.769531 20.953125 -20.59375 C 21.953125 -19.414062 22.726562 -17.921875 23.28125 -16.109375 C 23.84375 -14.296875 24.125 -12.128906 24.125 -9.609375 L 6.671875 -9.609375 C 6.898438 -8.753906 7.257812 -7.957031 7.75 -7.21875 C 8.238281 -6.488281 8.816406 -5.851562 9.484375 -5.3125 C 10.160156 -4.78125 10.914062 -4.363281 11.75 -4.0625 C 12.582031 -3.769531 13.453125 -3.625 14.359375 -3.625 C 15.609375 -3.625 16.765625 -3.851562 17.828125 -4.3125 C 18.890625 -4.769531 19.796875 -5.375 20.546875 -6.125 L 23.484375 -3.1875 C 22.335938 -2.039062 20.9375 -1.125 19.28125 -0.4375 C 17.632812 0.25 15.832031 0.59375 13.875 0.59375 Z M 13 -19.703125 C 12.238281 -19.703125 11.523438 -19.554688 10.859375 -19.265625 C 10.191406 -18.972656 9.570312 -18.566406 9 -18.046875 C 8.425781 -17.523438 7.929688 -16.90625 7.515625 -16.1875 C 7.109375 -15.46875 6.8125 -14.679688 6.625 -13.828125 L 19.03125 -13.828125 C 18.957031 -14.609375 18.773438 -15.359375 18.484375 -16.078125 C 18.191406 -16.796875 17.78125 -17.425781 17.25 -17.96875 C 16.726562 -18.507812 16.113281 -18.929688 15.40625 -19.234375 C 14.707031 -19.546875 13.90625 -19.703125 13 -19.703125 Z M 13 -19.703125 " className='fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50' />
        </g>
      </g>
    </g>
  </svg>
)
