import axios from "axios"
import React, { useEffect, useState } from "react"

function FetchGetExample() 
{
    const [tdata, SetTdata]=useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await axios.get('http://localhost:3001/posts')
                SetTdata(response.data)
            } catch (err) {
                setError(err.message || 'Failed to fetch')
            } finally {
                setLoading(false)
            }
        }

        fetchData()

    }, [])

    return (
        <div>
            <h1>user data</h1>
            {loading && <p>Loading…</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {!loading && !error && (
                <table width="300" border="1">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                        {tdata.map((p) => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.email}</td>
                                <td>{p.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default FetchGetExample;

//https://gorest.co.in/