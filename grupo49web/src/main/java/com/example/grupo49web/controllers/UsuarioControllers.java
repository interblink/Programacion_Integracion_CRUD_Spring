package com.example.grupo49web.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.grupo49web.models.UsuarioModels;
import com.example.grupo49web.service.UsuarioService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/usuario")

public class UsuarioControllers {

    @Autowired
    UsuarioService usuarioService;

    @PostMapping
    public UsuarioModels guardarUsuario(@RequestBody UsuarioModels usuario) {

        return this.usuarioService.guardarUsuario(usuario);

    }

    // buscar por ID
    @GetMapping(path = "/{id}")
    public Optional<UsuarioModels> obtenerusuarioId(@PathVariable("id") Long id) {
        return this.usuarioService.obtenerusuarioId(id);
    }

    // buscar por prioridad
    @RequestMapping("/query")
    public ArrayList<UsuarioModels> obtenerdatosporprioridad(@RequestParam("prioridad") Integer prioridad) {
        return this.usuarioService.obtenerusuarioprioridad(prioridad);
    }

    // buscar por telefono
    @RequestMapping("/querytele")
    public ArrayList<UsuarioModels> obtenerdatosportelefono(@RequestParam("telefono") String telefono) {
        return this.usuarioService.obtenerusuariotelefono(telefono);
    }

    // buscar por email
    @RequestMapping("/queryemail")
    public ArrayList<UsuarioModels> obtenerdatosporemail(@RequestParam("email") String email) {
        return this.usuarioService.obtenerusuarioemail(email);
    }

    // buscar por email y password
    @RequestMapping("/buscar_usuario")
    // URL ejemplo de envio Postman
    // http://localhost:8080/usuario/buscar_usuario?email=usuario@example.com&password=123456

    public Optional<UsuarioModels> buscar_usuario(@RequestParam("email") String email,
            @RequestParam("password") String password) {
        return this.usuarioService.buscarPorEmailYPassword(email, password);
    }

    // buscar por nombre
    @RequestMapping("/querynombre")
    public ArrayList<UsuarioModels> obtenerdatospornombre(@RequestParam("nombre") String nombre) {
        return this.usuarioService.obtenerusuarionombre(nombre);
    }

    // listar usuario
    @RequestMapping
    public ArrayList<UsuarioModels> obtenerusuarios() {
        return this.usuarioService.obtenerusuarios();
    }

    @DeleteMapping(path = "/{id}")
    public String eliminarid(@PathVariable("id") Long id) {
        boolean ok = this.usuarioService.Eliminar(id);
        if (ok) {
            return "Se elimino con exito" + id;
        } else {
            return "No se elimino con exito" + id;
        }

    }

}
