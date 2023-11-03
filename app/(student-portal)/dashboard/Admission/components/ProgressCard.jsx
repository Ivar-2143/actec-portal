import { Progress } from '@/components/ui/progress'
import { ProjectCompleteSVG } from '@/public/assets/image-vectors'

function ProgressCard({className}) {
  return (
    <div className={`flex flex-col justify-end p-6 progress-card bg-white h-full relative rounded-lg ${className}`}>
        <div className='hidden lg:flex w-full'>
        <svg className=' w-[260px] min-[1100px]:self-end' viewBox="0 0 450 336" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_710_43151)">
          <path d="M245.376 34.2681C251.256 34.2681 256.024 29.5007 256.024 23.6199C256.024 17.739 251.256 12.9717 245.376 12.9717C239.495 12.9717 234.727 17.739 234.727 23.6199C234.727 29.5007 239.495 34.2681 245.376 34.2681Z" fill="#1473E6"/>
          <path d="M244.32 27.6825C244.081 27.6829 243.848 27.6054 243.656 27.4617L243.644 27.4528L241.142 25.5385C240.654 25.1648 240.562 24.4667 240.936 23.9793C241.309 23.4919 242.008 23.3997 242.495 23.7734L244.116 25.0163L247.946 20.0193C248.32 19.5321 249.017 19.4399 249.505 19.8135L249.481 19.8467L249.506 19.8137C249.992 20.1877 250.084 20.8851 249.711 21.3726L245.206 27.2475C244.995 27.5219 244.668 27.6822 244.321 27.6812L244.32 27.6825Z" fill="white"/>
          <path d="M245.376 106.253C251.256 106.253 256.024 101.486 256.024 95.6052C256.024 89.7244 251.256 84.957 245.376 84.957C239.495 84.957 234.727 89.7244 234.727 95.6052C234.727 101.486 239.495 106.253 245.376 106.253Z" fill="#1473E6"/>
          <path d="M244.32 99.6669C244.081 99.6673 243.848 99.5898 243.656 99.4461L243.644 99.4372L241.142 97.5228C240.654 97.1492 240.562 96.4511 240.936 95.9637C241.309 95.4762 242.008 95.384 242.495 95.7577L244.116 97.0007L247.946 92.0037C248.32 91.5165 249.017 91.4243 249.505 91.7978L249.481 91.8311L249.506 91.7981C249.992 92.1721 250.084 92.8695 249.711 93.3569L245.206 99.2319C244.995 99.5063 244.668 99.6666 244.321 99.6656L244.32 99.6669Z" fill="white"/>
          <path d="M272.117 207.496C271.986 204.161 274.584 201.352 277.919 201.221C278.275 201.207 278.631 201.225 278.983 201.273L288.736 182.14L294.246 191.844L284.14 208.526C283.462 211.812 280.248 213.926 276.961 213.248C274.212 212.68 272.209 210.303 272.117 207.496Z" fill="#FFB7B7"/>
          <path d="M317.583 327.979L309.93 327.978L306.289 298.458L317.585 298.459L317.583 327.979Z" fill="#FFB7B7"/>
          <path d="M319.535 335.398L294.857 335.397V335.085C294.858 329.78 299.158 325.48 304.463 325.479H304.463L319.535 325.48L319.535 335.398Z" fill="#2F2E41"/>
          <path d="M359.072 327.979L351.419 327.978L347.778 298.458L359.073 298.459L359.072 327.979Z" fill="#FFB7B7"/>
          <path d="M361.024 335.398L336.346 335.397V335.085C336.347 329.78 340.647 325.48 345.951 325.479H345.952L361.024 325.48L361.024 335.398Z" fill="#2F2E41"/>
          <path d="M283.872 190.844L280.531 196.412C280.531 196.412 286.1 196.412 287.213 204.765L291.668 199.196L283.872 190.844Z" fill="#E5E5E5"/>
          <path d="M342.341 179.15C342.341 179.15 351.25 202.538 352.921 217.016C354.591 231.494 357.376 269.916 357.376 269.916L362.944 319.475L347.352 321.702L340.67 271.586L325.636 222.027L322.295 271.586L319.51 316.691L305.032 317.247L303.919 270.473L297.793 210.89L301.134 182.491L342.341 179.15Z" fill="#2F2E41"/>
          <path d="M331.482 108.153L337.051 112.051L344.29 184.997L299.186 186.111L305.311 135.438L310.879 120.96L314.899 115.647L331.482 108.153Z" fill="#E5E5E5"/>
          <path d="M332.596 160.496L334.3 110.125C334.3 110.125 337.608 110.38 338.721 112.051C339.835 113.721 358.211 117.062 358.211 117.062L354.87 168.849C354.87 168.849 368.791 210.055 363.779 212.282C358.768 214.51 349.858 213.953 349.858 213.953L332.596 160.496Z" fill="#2F2E41"/>
          <path d="M305.589 154.093L311.496 120.145L298.35 129.035L301.691 153.536L298.907 170.241C298.907 170.241 288.327 216.459 291.668 218.13C295.009 219.8 298.907 218.13 298.907 218.13L305.589 171.355V154.093Z" fill="#2F2E41"/>
          <path d="M302.248 127.921L298.35 129.035L296.68 151.308L293.896 170.798L280.531 194.742C280.531 194.742 287.213 190.287 289.998 203.095L304.716 177.47L302.248 127.921Z" fill="#2F2E41"/>
          <path d="M332.537 202.929C333.056 199.632 336.15 197.381 339.447 197.9C339.798 197.955 340.144 198.041 340.481 198.158L353.762 181.281L357.283 191.871L344.132 206.273C342.828 209.366 339.265 210.816 336.173 209.512C333.585 208.422 332.082 205.7 332.537 202.929Z" fill="#FFB7B7"/>
          <path d="M355.148 196.969L350.137 203.095L343.455 191.401L346.239 186.39L355.148 196.969Z" fill="#E5E5E5"/>
          <path d="M354.035 119.012L358.489 116.784C358.489 116.784 361.83 121.239 362.387 125.137C362.944 129.035 365.728 134.046 365.728 136.831C365.728 139.615 373.524 165.786 373.524 165.786L355.705 201.981C355.705 201.981 351.807 188.617 343.455 187.503L357.376 168.014L349.58 154.093L354.035 119.012Z" fill="#2F2E41"/>
          <path d="M450.425 335.741H236.157C235.846 335.741 235.594 335.489 235.594 335.179C235.594 334.868 235.846 334.616 236.157 334.616H450.425C450.735 334.616 450.987 334.868 450.987 335.179C450.987 335.489 450.735 335.741 450.425 335.741Z" fill="#CBCBCB"/>
          <path d="M205.27 119.226H0V71.9854H205.27V119.226Z" fill="white"/>
          <path d="M29.6251 87.6045C28.5205 87.6045 27.6251 88.4999 27.6251 89.6046C27.6251 90.7092 28.5205 91.6046 29.6251 91.6046H175.653C176.758 91.6046 177.653 90.7092 177.653 89.6046C177.653 88.5 176.758 87.6045 175.653 87.6045H29.6251Z" fill="#1473E6"/>
          <path d="M29.6251 99.6055C28.5205 99.6031 27.6232 100.497 27.6209 101.601C27.6185 102.706 28.5121 103.603 29.6167 103.606H121.937C123.042 103.606 123.937 102.71 123.937 101.606C123.937 100.501 123.042 99.6055 121.937 99.6055L29.6251 99.6055Z" fill="#1473E6"/>
          <path d="M205.27 119.226H0V71.9854H205.27V119.226ZM3.3743 115.851H201.896V75.3597H3.3743V115.851Z" fill="#E5E5E5"/>
          <path d="M205.27 191.21H0V143.97H205.27V191.21Z" fill="white"/>
          <path d="M29.6251 159.59C28.5205 159.59 27.6251 160.485 27.6251 161.59C27.6251 162.695 28.5205 163.59 29.6251 163.59H175.653C176.758 163.59 177.653 162.695 177.653 161.59C177.653 160.485 176.758 159.59 175.653 159.59H29.6251Z" fill="#E6E6E6"/>
          <path d="M29.6251 171.59C28.5205 171.588 27.6232 172.481 27.6208 173.586C27.6185 174.69 28.5121 175.588 29.6167 175.59H121.937C123.042 175.59 123.937 174.695 123.937 173.59C123.937 172.485 123.042 171.59 121.937 171.59H29.6251Z" fill="#E6E6E6"/>
          <path d="M205.27 191.21H0V143.97H205.27V191.21ZM3.3743 187.836H201.896V147.344H3.3743V187.836Z" fill="#E5E5E5"/>
          <path d="M206.957 47.2402H1.68716V0H206.957V47.2402Z" fill="white"/>
          <path d="M31.3123 15.6201C30.2077 15.6221 29.3138 16.5192 29.3158 17.6238C29.3178 18.7256 30.2105 19.6182 31.3123 19.6202H177.34C178.445 19.6182 179.339 18.7211 179.337 17.6165C179.335 16.5148 178.442 15.6221 177.34 15.6201H31.3123Z" fill="#1473E6"/>
          <path d="M31.3123 27.6201C30.2077 27.6178 29.3103 28.5114 29.308 29.616C29.3057 30.7206 30.1992 31.6179 31.3038 31.6202H123.624C124.729 31.6223 125.626 30.7284 125.628 29.6238C125.63 28.5192 124.736 27.6221 123.632 27.6201C123.629 27.6201 123.627 27.6201 123.624 27.6201L31.3123 27.6201Z" fill="#1473E6"/>
          <path d="M206.957 47.2402H1.68716V0H206.957V47.2402ZM5.06146 43.8659H203.583V3.3743H5.06146V43.8659Z" fill="#E5E5E5"/>
          <path d="M415.741 336V295.317C415.741 295.317 431.595 324.16 415.741 336Z" fill="#F1F1F1"/>
          <path d="M416.72 335.993L386.751 308.48C386.751 308.48 418.72 316.306 416.72 335.993Z" fill="#F1F1F1"/>
          <path d="M272.37 206.271C278.251 206.271 283.018 201.504 283.018 195.623C283.018 189.742 278.251 184.975 272.37 184.975C266.489 184.975 261.722 189.742 261.722 195.623C261.722 201.504 266.489 206.271 272.37 206.271Z" fill="#1473E6"/>
          <path d="M271.315 199.684C271.075 199.685 270.842 199.607 270.65 199.464L270.639 199.455L268.136 197.54C267.649 197.167 267.556 196.469 267.93 195.981C268.304 195.494 269.002 195.402 269.489 195.775L271.11 197.018L274.941 192.021C275.314 191.534 276.012 191.442 276.499 191.815L276.476 191.849L276.5 191.816C276.987 192.19 277.079 192.887 276.706 193.375L272.2 199.249C271.989 199.524 271.662 199.684 271.316 199.683L271.315 199.684Z" fill="white"/>
          <path d="M315.827 109.076C324.245 109.076 331.069 102.252 331.069 93.8341C331.069 85.416 324.245 78.5918 315.827 78.5918C307.409 78.5918 300.585 85.416 300.585 93.8341C300.585 102.252 307.409 109.076 315.827 109.076Z" fill="#FFB6B6"/>
          <path d="M329.142 105.545C329.142 105.545 333.656 96.4015 333.576 92.911C333.495 89.4206 331.029 80.4384 329.988 79.846C328.947 79.2537 317.722 73.5547 314.68 75.2682C311.638 76.9817 306.285 82.8425 300.511 84.4281C298.878 84.8766 300.304 93.2664 300.304 93.2664L307.061 92.2891C307.061 92.2891 314.105 85.9639 314.41 90.271C314.714 94.578 321.247 92.7841 321.247 92.7841L321.327 96.2746L324.001 96.4185L324.737 92.7037C324.737 92.7037 325.939 100.277 324.386 104.216C322.833 108.155 329.142 105.545 329.142 105.545Z" fill="#2F2E41"/>
          </g>
          <defs>
          <clipPath id="clip0_710_43151">
          <rect width="450.987" height="336" fill="white"/>
          </clipPath>
          </defs>
        </svg>
          {/* <ProjectCompleteSVG className='h-full w-[300px] object-fill' /> */}
          <div className=''>
            <h2 className='text-3xl font-bold '>Keep Completing Tasks!</h2>
            <h4 className='text-lg font-medium '>You are close to being an ACTECIAN!</h4>
            <p className='text-sm'>Once you’ve completed all the tasks and they’ve approved, you will be subject to enrollment.</p>
          </div>
        </div>
        <Progress value={30} className='h-[8px]'/>
    </div>
  )
}

export default ProgressCard