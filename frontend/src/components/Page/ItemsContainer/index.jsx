import { Item } from '..';
import { EL_CLUB, DEPORTES, CONTACTO } from './menus';

export function ItemsContainer() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 sm:px-8 py-16  ">
            <Item Links={EL_CLUB} title="El Club" />
            <Item Links={DEPORTES} title="Deportes" />
            <Item Links={CONTACTO} title="Contacto" />
        </div>
    );
}
