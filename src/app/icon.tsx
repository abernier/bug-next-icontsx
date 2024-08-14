import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx
// https://www.linkedin.com/posts/delbaoliveira_nextjs-file-based-metadata-icon-add-activity-7222279799346544641-2fTy?utm_source=share&utm_medium=member_desktop
export default function Icon() {
  return new ImageResponse(<div>A</div>, { ...size });
}
