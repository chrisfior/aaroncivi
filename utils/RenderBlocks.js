import React, { Fragment } from "react"
import * as components from "../components/blocks"


const capitalizeFirst = ([first, ...rest]) => first.toLocaleUpperCase() + rest.join('');

function resolveBlocks(type) {
  // eslint-disable-next-line import/namespace
  const Block = components[capitalizeFirst(type)]

  if (Block) {
    return Block
  }

  console.error("Cant find block", type) // eslint-disable-line no-console
  return null
}

export default function RenderBlocks(props) {
  const { blocks } = props;

  if (!blocks) {
    console.error("Missing block")
    return <div>Missing blocks</div>
  }

  return (
    <Fragment>
      {blocks.map(({ _type, _key, ...rest }) => {
        const BlockComponent = resolveBlocks(_type)
        if (!BlockComponent) {
          return <div>Missing block {_type}</div>
        }
        return <BlockComponent data={rest} key={_key} />
      })}
    </Fragment>
  )
}