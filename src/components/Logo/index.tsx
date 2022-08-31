import { Button } from '../Button'
import { NavLink } from '../NavLink'

const logo = {
  title: 'QualyLab',
  imgSource: '/assets/SysQuali.ico',
}

export function Logo() {
  return (
    <NavLink href="/">
      <Button buttonData={logo} variant />
    </NavLink>
  )
}
