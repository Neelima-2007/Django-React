import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

class ApiHelper {
  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // ---------- COURSE APIs ----------
  getCourses() {
    return this.client.get("courses/");
  }

  addCourse(data) {
    return this.client.post("courses/add/", data);
  }

  updateCourse(id, data) {
    return this.client.put(`courses/update/${id}/`, data);
  }

  deleteCourse(id) {
    return this.client.delete(`courses/delete/${id}/`);
  }

  // ---------- REGISTRATION APIs ----------
  registerUser(data) {
    return this.client.post("register/", data);
  }

  getRegistrations() {
    return this.client.get("registrations/");
  }

  updateRegistration(id, data) {
    return this.client.put(`registrations/update/${id}/`, data);
  }

  deleteRegistration(id) {
    return this.client.delete(`registrations/delete/${id}/`);
  }

  // ---------- LOGIN ----------
  loginUser(data) {
    return this.client.post("login/", data);
  }

  // ---------- GALLERY ----------
  getGallery() {
    return this.client.get("gallery/");
  }

  addGalleryItem(data) {
    return this.client.post("gallery/add/", data);
  }
}

const api = new ApiHelper();
export default api;
