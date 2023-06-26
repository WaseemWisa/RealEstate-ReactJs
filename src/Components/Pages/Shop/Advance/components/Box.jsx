import { Checkbox } from '@mantine/core';
function Box({title , count}) {
  return (
    <div className="row">
      <Checkbox
        label={title}
        color="yellow"
        radius="xs"
      />
      <span className="count">{`${count}`}</span>
    </div>
  )
}

export default Box