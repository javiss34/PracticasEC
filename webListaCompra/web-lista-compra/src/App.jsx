/* create or replace function public.insertar_rol()
returns trigger as $$
begin
  insert into public.roles (id_rol,correo_electronico,rol)
  values (new.id,new.email,'usuario');
  return new;
end;
$$ language plpgsql security definer;

create trigger al_crear_usuario
  after insert on auth.users
  for each row execute procedure public.insertar_rol(); */


/* create or replace function public.comprobar_admin()
returns boolean as $$
begin
  return exists (
    select 1
    from public.roles
    where id_rol = auth.uid()
    and rol = 'admin'
  );
end;
$$ language plpgsql security definer set search_path = public; */

import "./App.css";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Menu from "./components/menu/Menu.jsx";
import ProveedorSesion from "./context/ProveedorSesion.jsx";
import ProveedorProductos from "./context/ProveedorProductos.jsx";
import ProveedorListas from "./context/ProveedorListas.jsx";
import Rutas from "./routes/Rutas.jsx";

function App() {
  return (
    <>
      <ProveedorSesion>
        <ProveedorProductos>
          <ProveedorListas>
          <Header />
          <Menu />
          <Rutas />
          <Footer />
          </ProveedorListas>
        </ProveedorProductos>
      </ProveedorSesion>
    </>
  );
}

export default App;
