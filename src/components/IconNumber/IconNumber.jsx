import React from 'react'

export default function IconNumber(data) {
    return (
        <>
            <div>
                {data.selected === 'True' ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                    >
                        <circle cx="25" cy="25" r="12" stroke="#6F7DFF" strokeWidth="2" fill="#6F7DFF" />
                        <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dy=".3em"
                            fontSize="11"
                            fontFamily="Arial"
                            fill="white"
                        >
                            {data.Num}
                        </text>
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                    >
                        <circle cx="25" cy="25" r="12" stroke="#6F7DFF" strokeWidth="2" fill="none" />
                        <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dy=".3em"
                            fontSize="11"
                            fontFamily="Arial"
                            fill="#6F7DFF"
                        >
                            {data.Num}
                        </text>
                    </svg>
                )}
            </div>
        </>
    )
}