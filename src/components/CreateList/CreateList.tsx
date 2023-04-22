import React from 'react';

interface CreateListProps<T> {
    items: T[],
    renderItem: (item: T) => React.ReactNode,
}

export default function CreateList<T>(props:CreateListProps<T>) {
    return (
        <div className='filter-element'>
            {props.items.map(props.renderItem)}
        </div>
    )
};