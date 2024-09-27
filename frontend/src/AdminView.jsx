import { useEffect, useState } from "react";

async function get_users() {
    try {
        const response = await fetch(`http://127.0.0.1:5000/users`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const respuestaJson = await response.json();
        return respuestaJson.data;
        
    } catch (error) {
        console.error('Error:', error);
    }
}

async function get_restaurants() {
    try {
        const response = await fetch(`http://127.0.0.1:5000/restaurants`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const respuestaJson = await response.json();
        return respuestaJson.data;
        
    } catch (error) {
        console.error('Error:', error);
    }
}

function AdminView() {
    const [users, setUsers] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const fetchedUsers = await get_users();
          setUsers(fetchedUsers || []);
          
          const fetchedRestaurants = await get_restaurants();
          setRestaurants(fetchedRestaurants || []);

        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    if (loading) {
      return <p>Charging data...</p>;
    }

    return (
      <>
      <div>
        <p><a href="/">Sign out</a></p>
        <h1>Admin view</h1>
        <>
        <h3>Users</h3>
        <table border="1" cellPadding="10">
            <thead>
            <tr>
                <th>Id user</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Mail</th>
                <th>Password</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user._id}>
                <td>{user.identificador}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.mail}</td>
                <td>{user.password}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </>

        <>
        <h3>Restaurants</h3>
        <table border="1" cellPadding="10">
            <thead>
            <tr>
                <th>Id restaurant</th>
                <th>Name</th>
                <th>Type_food</th>
                <th>Products</th>
            </tr>
            </thead>
            <tbody>
            {restaurants.map((restaurant) => (
                <tr key={restaurant._id}>
                <td>{restaurant.identificador}</td>
                <td>{restaurant.name}</td>
                <td>{restaurant.type_food}</td>
                <td>
                    {restaurant.products.map((product) => (
                    <div key={product._id}>
                        {product.name} - {product.value}
                    </div>
                    ))}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    </div>
    </>
    );
}

export default AdminView;
