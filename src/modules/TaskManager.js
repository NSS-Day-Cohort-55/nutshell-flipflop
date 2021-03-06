const remoteURL = "http://localhost:8088"

export const getAllTasks = () => {
    return fetch(`${remoteURL}/tasks?&_sort=deadline&_order=desc`).then(res => res.json())
    .then((parsedResponse) => {
      return parsedResponse.reverse();
    });
}

export const getTaskById = (id) => {
    return fetch(`${remoteURL}/tasks/${id}`).then(res => res.json())
}

export const deleteTask = id => {
    return fetch(`${remoteURL}/tasks/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}

export const addTask = newTasks => {
    return fetch(`${remoteURL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTasks)
    }).then(res => res.json())
  }

  export const updateTask  = (editedTask) => {
    return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTask)
    }).then(data => data.json());
  }

 