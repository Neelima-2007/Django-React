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

  getAdminSummary() {
    return this.client.get('admin/summary/');
  }


  // ---------- COURSE APIs ----------
  getCourses() {
    return this.client.get("courses/");
  }

  addCourse(data) {
    return this.client.post("courses/add/", data);
  }

  updateCourse(id, data) {
    return this.client.put(`courses/${id}/update/`, data);
  }

  deleteCourse(id) {
    return this.client.delete(`courses/${id}/delete/`);
  }

  createRegistration(data) {
    return this.client.post("register/", data);
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
    return this.client.delete(`registrations/${id}/delete/`);
  }

  updateRegistration(id, data) {
    // ✅ This matches Django URL: "registrations/<int:pk>/update/"
    return this.client.put(`registrations/${id}/update/`, data);
  }

  // ---------- LOGIN ----------
  loginUser(data) {
    return this.client.post("login/", data);
  }
  getLoginList() {
    return this.client.get("loginlist/"); // <-- your Django API endpoint
  }
  
  getLoginUsers() {
    return this.client.get("login/");
  }


  // ---------- GALLERY ----------
  getGallery() {
    return this.client.get("gallery/");
  }

  addGalleryItem(data) {
    return this.client.post("gallery/add/", data);
  }

  // ---------- CONTACT ----------
  sendContactMessage(data) {
    return this.client.post("contact/", data);
  }
}

const api = new ApiHelper();
export default api;
