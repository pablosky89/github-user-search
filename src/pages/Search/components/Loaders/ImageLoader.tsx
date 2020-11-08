import React from "react"
import ContentLoader from "react-content-loader"

const ImageLoader = () => (
  <ContentLoader 
    speed={6}
    width={400}
    height={335}
    viewBox="0 0 400 335"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="2" ry="2" width="284" height="284" /> 
    <rect x="5" y="295" rx="0" ry="0" width="100" height="45" />
  </ContentLoader>
)

export default ImageLoader;