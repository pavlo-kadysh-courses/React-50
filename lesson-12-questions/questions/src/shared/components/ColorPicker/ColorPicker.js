import React from 'react'
import styles from "./ColorPicker.module.scss"
import styled from "styled-components";

export default function ColorPicker({ options }) {
  return (
    <StylesColorPicker>
        <div className="ColorPicker">
            <h2 className="ColorPicker__title">Color picker</h2>
            <div>
                {options.map(({ label, color }) => {
                    return (
                        <span 
                            key={label}
                            className="ColorPicker__option"
                            style={{ backgroundColor: color }}
                        >
                        </span>
                    )
                })}
            </div>
        </div>
    </StylesColorPicker>
  )
}


const StylesColorPicker = styled.div`
    .ColorPicker {
        border: 1px solid grey;
        display: inline-block;
        padding: 10px;
        &__title {
            text-align: left;
        }
        &__option {
            display: inline-block;
            height: 30px;
            width: 30px;
            margin: 10px;
        }
    }
`
