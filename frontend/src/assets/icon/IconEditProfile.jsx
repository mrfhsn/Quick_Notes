import React from 'react'

export function EditProfileIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`1em`}
      height={`1em`}
      viewBox="0 0 14 14" {...props}
    >{/* Icon from Streamline by Streamline - https://creativecommons.org/licenses/by/4.0/ */}
      <g
        fill="none"
        stroke={`currentColor`}
        strokeLinecap="round"
        strokeLinejoin="round"
      ><circle cx="5" cy="2.75" r="2.25" /><path d="M3.5 12.5h-3V11A4.51 4.51 0 0 1 7 7m6.5 1.5l-4.71 4.71l-2.13.29l.3-2.13l4.7-4.71L13.5 8.5z" />
      </g>
    </svg>
  )
}
export default EditProfileIcon