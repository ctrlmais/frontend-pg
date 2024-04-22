import { twMerge } from "tailwind-merge"

export const AderenciaSVG = ({ className }) => {
return (
<svg className={twMerge("w-[343px] h-[343px]", className)}  width="343" height="343" viewBox="0 0 343 343" fill="none" xmlns="http://www.w3.org/2000/svg">
	<circle cx="172" cy="172" r="150" fill="url(#imagePattern)" />
	<g clipPath="url(#clip0_232_234)">
		<path d="M171.505 3.09055C177.336 3.09055 183.012 5.63511 189.018 8.32389C193.52 10.3431 198.166 12.424 202.977 13.3718C205.8 13.9281 208.839 14.1753 212.846 14.1753C214.649 14.1753 216.473 14.1238 218.234 14.0723C219.944 14.0208 221.716 13.9796 223.426 13.9796C227.382 13.9796 231.977 14.2062 235.984 15.8648C241.269 18.0591 245.514 22.5507 249.995 27.3102C253.415 30.9364 256.949 34.676 261.08 37.4472C265.262 40.2493 270.104 42.1036 274.791 43.8962C280.87 46.2244 286.608 48.4187 290.605 52.4158C294.602 56.4129 296.796 62.151 299.124 68.2291C300.917 72.9165 302.771 77.7583 305.573 81.9409C308.345 86.0719 312.084 89.6055 315.71 93.0257C320.47 97.5173 324.961 101.751 327.156 107.036C329.288 112.187 329.123 118.306 328.948 124.776C328.814 129.824 328.67 135.037 329.659 140.033C330.607 144.834 332.698 149.49 334.707 153.992C337.396 159.998 339.94 165.664 339.94 171.505C339.94 177.346 337.396 183.012 334.707 189.018C332.688 193.52 330.607 198.166 329.659 202.977C328.67 207.974 328.814 213.186 328.948 218.234C329.123 224.714 329.288 230.823 327.156 235.974C324.961 241.259 320.47 245.503 315.71 249.985C312.084 253.405 308.345 256.938 305.573 261.069C302.771 265.252 300.917 270.094 299.124 274.781C296.796 280.859 294.602 286.597 290.605 290.594C286.608 294.592 280.87 296.786 274.791 299.114C270.104 300.907 265.262 302.761 261.08 305.563C256.949 308.334 253.415 312.074 249.995 315.7C245.503 320.46 241.269 324.951 235.984 327.145C231.977 328.804 227.382 329.031 223.426 329.031C221.727 329.031 219.955 328.979 218.234 328.938C216.473 328.886 214.649 328.835 212.846 328.835C208.839 328.835 205.8 329.082 202.977 329.638C198.177 330.586 193.52 332.678 189.018 334.686C183.012 337.375 177.346 339.92 171.505 339.92C165.664 339.92 159.998 337.375 153.992 334.686C149.49 332.667 144.844 330.586 140.033 329.638C137.21 329.082 134.171 328.835 130.164 328.835C128.361 328.835 126.538 328.886 124.776 328.938C123.066 328.989 121.294 329.031 119.584 329.031C115.628 329.031 111.033 328.804 107.026 327.145C101.741 324.951 97.4967 320.46 93.0154 315.7C89.5952 312.074 86.0616 308.334 81.9306 305.563C77.748 302.761 72.9062 300.907 68.2188 299.114C62.1407 296.786 56.4026 294.592 52.4055 290.594C48.4084 286.597 46.2141 280.859 43.8859 274.781C42.0933 270.094 40.239 265.252 37.4369 261.069C34.6657 256.938 30.9261 253.405 27.2999 249.985C22.5404 245.493 18.0488 241.259 15.8545 235.974C13.7221 230.823 13.8869 224.704 14.062 218.234C14.1959 213.186 14.3402 207.974 13.3512 202.977C12.4034 198.177 10.3121 193.52 8.30329 189.018C5.6145 183.012 3.06995 177.346 3.06995 171.505C3.06995 165.664 5.6145 159.998 8.30329 153.992C10.3224 149.49 12.4034 144.844 13.3512 140.033C14.3402 135.037 14.1959 129.824 14.062 124.776C13.8869 118.296 13.7221 112.187 15.8545 107.036C18.0488 101.751 22.5404 97.507 27.2999 93.0257C30.9261 89.6055 34.6657 86.0719 37.4369 81.9409C40.239 77.7583 42.0933 72.9165 43.8859 68.2291C46.2141 62.151 48.4084 56.4129 52.4055 52.4158C56.4026 48.4187 62.1407 46.2244 68.2188 43.8962C72.9062 42.1036 77.748 40.2493 81.9306 37.4472C86.0616 34.676 89.5952 30.9364 93.0154 27.3102C97.507 22.5507 101.741 18.0591 107.026 15.8648C111.033 14.2062 115.628 13.9796 119.584 13.9796C121.284 13.9796 123.056 14.0311 124.776 14.0723C126.538 14.1238 128.361 14.1753 130.164 14.1753C134.171 14.1753 137.21 13.9281 140.023 13.3718C144.823 12.424 149.48 10.3328 153.982 8.32389C159.988 5.63511 165.654 3.09055 171.495 3.09055M171.505 0C160.297 0 150.036 8.24148 139.446 10.3328C136.458 10.92 133.337 11.0848 130.184 11.0848C126.672 11.0848 123.097 10.8891 119.604 10.8891C114.783 10.8891 110.096 11.2599 105.862 13.0112C95.6423 17.2453 89.317 28.7937 80.2308 34.8821C71.0724 41.0117 57.9994 42.4745 50.2421 50.2318C42.4848 57.9891 41.0219 71.0724 34.8924 80.2205C28.8143 89.3067 17.2659 95.632 13.0215 105.851C8.85959 115.896 12.5064 128.516 10.3431 139.436C8.25178 150.036 0.0102997 160.286 0.0102997 171.495C0.0102997 182.703 8.25178 192.964 10.3431 203.554C12.5064 214.474 8.84928 227.094 13.0215 237.138C17.2556 247.358 28.804 253.683 34.8924 262.769C41.0219 271.928 42.4848 285.001 50.2421 292.758C57.9994 300.515 71.0827 301.978 80.2308 308.108C89.317 314.186 95.6423 325.734 105.862 329.978C110.096 331.73 114.783 332.101 119.604 332.101C123.097 332.101 126.661 331.905 130.184 331.905C133.337 331.905 136.458 332.059 139.446 332.657C150.046 334.748 160.297 342.99 171.505 342.99C182.714 342.99 192.974 334.748 203.564 332.657C206.552 332.07 209.673 331.905 212.826 331.905C216.339 331.905 219.914 332.101 223.406 332.101C228.227 332.101 232.914 331.73 237.148 329.978C247.368 325.744 253.693 314.196 262.779 308.108C271.938 301.978 285.011 300.515 292.768 292.758C300.525 285.001 301.988 271.917 308.118 262.769C314.196 253.683 325.744 247.358 329.989 237.138C334.151 227.094 330.504 214.474 332.667 203.554C334.758 192.954 343.01 182.703 343.01 171.495C343.01 160.286 334.769 150.026 332.678 139.436C330.514 128.516 334.171 115.896 329.999 105.851C325.765 95.632 314.217 89.3067 308.128 80.2205C301.999 71.0621 300.536 57.9891 292.778 50.2318C285.021 42.4745 271.938 41.0117 262.79 34.8821C253.704 28.804 247.378 17.2556 237.159 13.0112C232.925 11.2599 228.237 10.8891 223.416 10.8891C219.924 10.8891 216.359 11.0848 212.836 11.0848C209.684 11.0848 206.562 10.9303 203.575 10.3328C192.974 8.24148 182.724 0 171.515 0L171.505 0Z" fill="#80CEFF" />
		<path d="M153.024 11.1157C155.692 11.1157 158.545 12.2798 161.574 13.516C164.788 14.8347 168.116 16.1945 171.505 16.1945C174.894 16.1945 178.212 14.8347 181.436 13.516C184.455 12.2798 187.308 11.1157 189.987 11.1157C190.327 11.1157 190.656 11.1363 190.976 11.1775C194.025 11.5484 196.879 13.6191 199.887 15.8031C202.648 17.8119 205.501 19.8929 208.684 20.6758C209.818 20.954 211.044 21.0879 212.434 21.0879C214.567 21.0879 216.771 20.7685 218.904 20.4492C221.005 20.1401 222.983 19.8517 224.869 19.8517C226.404 19.8517 227.691 20.0577 228.783 20.4698C231.637 21.5515 233.893 24.2403 236.283 27.0836C238.488 29.7105 240.764 32.4199 243.69 33.9549C246.647 35.5105 250.191 35.8504 253.621 36.1801C257.299 36.5407 260.771 36.8703 263.243 38.5804C265.736 40.3008 267.281 43.4429 268.919 46.7704C270.434 49.8507 272.01 53.0442 274.493 55.2488C276.975 57.4534 280.344 58.6278 283.589 59.7713C287.082 60.9972 290.378 62.1511 292.387 64.4175C294.386 66.6736 295.138 70.0835 295.941 73.6994C296.683 77.0681 297.456 80.5398 299.341 83.2801C301.226 85.9998 304.193 87.9366 307.077 89.8218C310.189 91.8513 313.114 93.7571 314.536 96.4562C315.937 99.1141 315.844 102.596 315.762 106.284C315.679 109.735 315.587 113.3 316.771 116.431C317.936 119.512 320.346 122.097 322.685 124.601C325.219 127.321 327.619 129.896 328.351 132.863C329.062 135.758 328.145 139.106 327.166 142.65C326.249 145.987 325.301 149.449 325.703 152.787C326.095 156.032 327.805 159.112 329.474 162.089C331.287 165.345 333.007 168.425 333.007 171.515C333.007 174.606 331.287 177.676 329.474 180.942C327.815 183.919 326.095 186.999 325.703 190.244C325.301 193.582 326.249 197.043 327.166 200.381C328.134 203.925 329.062 207.273 328.351 210.168C327.619 213.145 325.219 215.71 322.685 218.43C320.357 220.933 317.936 223.519 316.771 226.599C315.587 229.721 315.669 233.296 315.762 236.747C315.855 240.435 315.937 243.917 314.536 246.575C313.125 249.264 310.189 251.18 307.077 253.209C304.203 255.084 301.226 257.021 299.341 259.751C297.445 262.491 296.683 265.973 295.941 269.332C295.148 272.937 294.396 276.347 292.387 278.613C290.378 280.88 287.082 282.034 283.589 283.26C280.344 284.403 276.986 285.577 274.493 287.782C272.01 289.987 270.444 293.17 268.919 296.26C267.281 299.588 265.736 302.72 263.243 304.45C260.771 306.161 257.299 306.501 253.621 306.851C250.191 307.18 246.636 307.531 243.69 309.076C240.775 310.611 238.488 313.32 236.283 315.947C233.893 318.791 231.637 321.479 228.783 322.561C227.681 322.973 226.404 323.179 224.869 323.179C222.983 323.179 221.005 322.891 218.904 322.582C216.771 322.273 214.567 321.943 212.434 321.943C211.044 321.943 209.818 322.077 208.684 322.355C205.501 323.138 202.648 325.219 199.887 327.228C196.868 329.422 194.025 331.493 190.976 331.853C190.656 331.895 190.327 331.915 189.987 331.915C187.318 331.915 184.465 330.751 181.436 329.515C178.222 328.196 174.894 326.836 171.505 326.836C168.116 326.836 164.799 328.196 161.574 329.515C158.556 330.751 155.702 331.915 153.024 331.915C152.684 331.915 152.354 331.895 152.035 331.853C148.985 331.483 146.132 329.412 143.124 327.228C140.363 325.219 137.509 323.138 134.326 322.355C133.193 322.077 131.967 321.943 130.576 321.943C128.443 321.943 126.239 322.262 124.106 322.582C122.005 322.891 120.027 323.179 118.142 323.179C116.607 323.179 115.319 322.973 114.227 322.561C111.373 321.479 109.117 318.791 106.727 315.947C104.523 313.32 102.246 310.611 99.3201 309.076C96.3635 307.52 92.8196 307.18 89.3891 306.851C85.7113 306.49 82.2396 306.161 79.7672 304.45C77.2741 302.73 75.7289 299.588 74.0909 296.26C72.5765 293.18 71.0003 289.987 68.5176 287.782C66.0348 285.577 62.6661 284.403 59.421 283.26C55.9287 282.034 52.6321 280.88 50.6233 278.613C48.6247 276.357 47.8727 272.947 47.0691 269.332C46.3274 265.963 45.5548 262.491 43.6695 259.751C41.7843 257.031 38.8174 255.094 35.9328 253.209C32.8217 251.18 29.896 249.274 28.4743 246.575C27.0732 243.917 27.166 240.435 27.2484 236.747C27.3308 233.296 27.4235 229.731 26.2388 226.599C25.0747 223.519 22.6641 220.933 20.3255 218.43C17.7913 215.71 15.391 213.135 14.6595 210.168C13.9487 207.273 14.8656 203.925 15.8442 200.381C16.7611 197.043 17.7089 193.582 17.3071 190.244C16.9156 186.999 15.2055 183.919 13.5366 180.942C11.7235 177.686 10.0031 174.606 10.0031 171.515C10.0031 168.425 11.7235 165.355 13.5366 162.089C15.1952 159.112 16.9156 156.032 17.3071 152.787C17.7089 149.449 16.7611 145.987 15.8442 142.65C14.8759 139.106 13.9487 135.758 14.6595 132.863C15.391 129.886 17.7913 127.321 20.3255 124.601C22.6538 122.097 25.0747 119.512 26.2388 116.431C27.4235 113.31 27.3411 109.735 27.2484 106.284C27.1557 102.596 27.0732 99.1141 28.4743 96.4562C29.8857 93.7674 32.8217 91.8513 35.9328 89.8218C38.8071 87.9469 41.7843 86.0101 43.6695 83.2801C45.5651 80.5398 46.3274 77.0578 47.0691 73.6994C47.8624 70.0938 48.6144 66.6839 50.6233 64.4175C52.6321 62.1511 55.9287 60.9972 59.421 59.7713C62.6661 58.6278 66.0245 57.4534 68.5176 55.2488C71.0003 53.0442 72.5662 49.861 74.0909 46.7704C75.7289 43.4429 77.2741 40.3111 79.7672 38.5804C82.2396 36.8703 85.7113 36.5304 89.3891 36.1801C92.8196 35.8504 96.3738 35.5002 99.3201 33.9549C102.236 32.4199 104.523 29.7105 106.727 27.0836C109.117 24.2403 111.373 21.5515 114.227 20.4698C115.329 20.0577 116.607 19.8517 118.142 19.8517C120.027 19.8517 122.005 20.1401 124.106 20.4492C126.239 20.7582 128.443 21.0879 130.576 21.0879C131.967 21.0879 133.193 20.954 134.326 20.6758C137.509 19.8929 140.363 17.8119 143.124 15.8031C146.142 13.6088 148.985 11.5381 152.035 11.1775C152.354 11.1363 152.684 11.1157 153.024 11.1157ZM153.024 9.57043C152.632 9.57043 152.241 9.59104 151.849 9.64255C145.39 10.4152 140.146 17.6471 133.955 19.1718C132.873 19.4396 131.74 19.5426 130.576 19.5426C126.548 19.5426 122.139 18.3064 118.142 18.3064C116.576 18.3064 115.072 18.4918 113.671 19.0275C107.613 21.3248 104.275 29.6075 98.599 32.5951C92.8814 35.6032 84.1661 33.6665 78.8812 37.3236C73.5758 40.9911 72.3087 49.83 67.4874 54.1053C62.6661 58.3806 53.7447 58.5763 49.4695 63.3976C45.2045 68.2085 46.0699 77.099 42.4024 82.4045C38.7452 87.6893 30.1226 90.0072 27.1145 95.7351C24.1269 101.411 27.0938 109.828 24.7965 115.885C22.5301 121.871 14.711 126.198 13.1658 132.492C11.6411 138.694 16.5551 146.142 15.7721 152.601C15.0098 158.927 8.45781 164.994 8.45781 171.515C8.45781 178.037 15.0098 184.104 15.7721 190.43C16.5448 196.889 11.6411 204.337 13.1658 210.539C14.711 216.844 22.5301 221.16 24.7965 227.145C27.0938 233.203 24.1269 241.609 27.1041 247.296C30.1123 253.013 38.7349 255.331 42.3921 260.626C46.0596 265.932 45.1942 274.822 49.4592 279.633C53.7344 284.455 62.6558 284.65 67.4771 288.926C72.2881 293.191 73.5552 302.03 78.8709 305.707C84.1558 309.364 92.8711 307.428 98.5887 310.436C104.265 313.423 107.613 321.706 113.66 324.003C115.061 324.529 116.565 324.724 118.131 324.724C122.128 324.724 126.538 323.488 130.566 323.488C131.73 323.488 132.863 323.591 133.945 323.859C140.146 325.384 145.38 332.616 151.839 333.388C152.23 333.44 152.622 333.46 153.013 333.46C158.999 333.46 165.365 328.382 171.485 328.382C177.604 328.382 183.97 333.46 189.956 333.46C190.347 333.46 190.739 333.44 191.13 333.388C197.589 332.616 202.833 325.384 209.024 323.859C210.106 323.591 211.239 323.488 212.403 323.488C216.431 323.488 220.841 324.724 224.838 324.724C226.404 324.724 227.908 324.539 229.309 324.003C235.366 321.706 238.704 313.423 244.38 310.436C250.098 307.428 258.813 309.364 264.098 305.707C269.404 302.04 270.671 293.201 275.492 288.926C280.313 284.65 289.235 284.455 293.51 279.633C297.775 274.822 296.91 265.932 300.577 260.626C304.234 255.342 312.857 253.024 315.865 247.296C318.852 241.62 315.886 233.203 318.183 227.145C320.449 221.16 328.268 216.833 329.814 210.539C331.338 204.337 326.424 196.889 327.207 190.43C327.97 184.104 334.522 178.037 334.522 171.515C334.522 164.994 327.97 158.927 327.207 152.601C326.435 146.142 331.338 138.694 329.814 132.492C328.268 126.187 320.449 121.871 318.183 115.885C315.886 109.828 318.852 101.422 315.875 95.7351C312.867 90.0175 304.244 87.6996 300.587 82.4045C296.92 77.099 297.785 68.2085 293.52 63.3976C289.245 58.5763 280.324 58.3806 275.502 54.1053C270.691 49.8404 269.424 41.0014 264.108 37.3236C258.824 33.6665 250.108 35.6032 244.391 32.5951C238.714 29.6075 235.366 21.3248 229.319 19.0275C227.918 18.5021 226.414 18.3064 224.848 18.3064C220.851 18.3064 216.442 19.5426 212.414 19.5426C211.25 19.5426 210.116 19.4396 209.035 19.1718C202.833 17.6471 197.6 10.4152 191.14 9.64255C190.749 9.59104 190.357 9.57043 189.966 9.57043C183.981 9.57043 177.614 14.6492 171.495 14.6492C165.376 14.6492 159.009 9.57043 153.024 9.57043Z" fill="#1B4472" />
	</g>
	<defs>
		<clipPath id="clip0_232_234">
			<rect width="343" height="343" fill="white" />
		</clipPath>
	</defs>
	<defs>
		<pattern id="imagePattern" x="0" y="0" patternUnits="userSpaceOnUse" height="350" width="300">
			<image href="https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2021/02/nyan-cat.gif" x="0" y="0" width="300" height="350" preserveAspectRatio="none">
				<animate attributeName="x" from="0" to="0" dur="10s" repeatCount="indefinite" />
			</image>
		</pattern>
		<path id="circlePath" d="M150 175 m -150 0 a 150 150 0 1 0 300 0 a 150 150 0 1 0 -300 0" />
	</defs>
</svg>)
}
