﻿module Vertices {
    export class Vertex3DC implements WGL.VertexObject {
        public static getDescriptor(gl: WebGLRenderingContext): WGL.VertexDescriptor {
            return new WGL.VertexDescriptor([
                new WGL.VertexAttributeDescription(gl, "aPos", 3, gl.FLOAT, true, 32, 0),
                new WGL.VertexAttributeDescription(gl, "aColor", 3, gl.FLOAT, true, 32, 12),
                new WGL.VertexAttributeDescription(gl, "aTexCoord", 2, gl.FLOAT, true, 32, 24)
            ]);
        }

        public Position: TSM.vec3;
        public Color: TSM.vec3;
        public UV: TSM.vec2;
        constructor(pos: TSM.vec3, color: TSM.vec3, uv: TSM.vec2 = new TSM.vec2([0.0, 0.0])) {
            this.Position = pos;
            this.Color = color;
            this.UV = uv;
        }

        getComponent(name: String): number[] {
            if (name == "aPos") {
                return this.Position.xyz;
            } else if (name == "aColor") {
                return this.Color.xyz;
            } else if (name === "aTexCoord") {
                return this.UV.xy;
            } else {
                throw "Bad component: " + name;
            }
        }
    }
}  