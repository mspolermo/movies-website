import React, {FC, PropsWithChildren} from 'react';
import './ActorHeader.scss'

interface ActorHeaderProps{
    'foto': string,
    'name': string,
    'USname': string,
}

const ActorHeader: FC<PropsWithChildren<ActorHeaderProps>> = ({foto, name, USname}) => {
    return (
        <div className="actorHeader">
            <div className="actorHeader__content">

                <div className="actorHeader__foto">
                    <img src={foto} alt=""/>
                </div>
                <div className="actorHeader__name name">
                    <div className="name__title">
                        {name}
                    </div>
                    <div className="name__subtitle">
                        {USname}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ActorHeader;