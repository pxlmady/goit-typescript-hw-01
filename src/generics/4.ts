type UserData = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends Partial<UserData>>(
  initialValues: T
): void {
  const updatedUser: UserData = {
    name: initialValues.name || "Default Name",
    surname: initialValues.surname || "Default Surname",
    email: initialValues.email || "default@example.com",
    password: initialValues.password || "defaultPassword",
  };

  console.log("Updated User:", updatedUser);
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
  surname: "UserSurname",
});
