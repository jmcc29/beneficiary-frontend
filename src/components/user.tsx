"use client";

import { AvatarIcon } from "@heroui/avatar";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import { User } from "@heroui/user";

import { logout } from "@/api";
import { urlLogin } from "@/services";

export function UserComponent() {
  const handleLogout = async () => {
    await logout();
    window.location.href = `${urlLogin}/login`;
  };

  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <User
          as="button"
          avatarProps={{
            isBordered: true,
            icon: <AvatarIcon />,
          }}
          className="transition-transform"
          description=""
          name=""
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-bold">Sesión activa{/*como */}</p>
          {/* <p>@Nombre Usuario</p> */}
        </DropdownItem>
        <DropdownItem key="logout" color="danger" onPress={handleLogout}>
          Cerrar Sesión
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
