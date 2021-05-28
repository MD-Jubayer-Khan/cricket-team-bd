import React from 'react';

const Cart = (props) => {
        const cart = props.cart;
        const totalSalary = cart.reduce((sum, current) => sum + current.salary, 0);

        return ( <
            div className = "cart col-md-4 mt-5" >
            <
            h3 className = "mt-3" > Total Selected Players { cart.length } < /h3> <
            ul className = "list-group my-4" > {
                cart.map(player => < li key = { player.name }
                    className = "list-group-item" > { player.name } - $ { player.salary } < /li>)
                } <
                /ul> <
                p > Total Salary $ { totalSalary } < /p> <
                div className = "d-grid mb-3" >
                <
                button type = "button"
                className = "btn btn-outline-success" > Selected Player < /button> < /
                div > <
                /div>
            );
        };

        export default Cart;