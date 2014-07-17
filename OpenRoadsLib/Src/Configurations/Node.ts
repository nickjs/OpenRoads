﻿declare function require(s: string): any;
module Configurations {
    export function runNode(): void {
        try {
            var agentLib = require('webkit-devtools-agent');
            var agent = new agentLib();
            agent.start(9999, 'localhost', 3333, true);
        } catch (e) {
        }

        var wgl = require('./Node/node_modules/node-webgl');

        var manager = new Managers.StreamManager(new Stores.LocalFileProvider()), shaderManager = new Managers.ShaderManager(manager);
        var managers = new Managers.ManagerSet(manager, shaderManager);
        managers.Sounds = new Managers.SoundManager(managers);
        managers.Settings = new Managers.SettingsManager(new Stores.FSStore());
        managers.Textures = new Managers.TextureManager(managers);
        managers.Canvas = new Drawing.NodeCanvasProvider();
        managers.Audio = new Sounds.PortAudioAudioProvider();
        managers.Graphics = new Shaders.VRShaderProvider();

        manager.loadMultiple(["Shaders/basic_2d.fs", "Shaders/basic_2d.vs", 'Shaders/title_2d.fs', 'Shaders/title_2d.vs', 'Shaders/color_3d.vs', 'Shaders/color_3d.fs',
            'Shaders/texture_p3d.vs', 'Shaders/texture_p3d.fs', 'Shaders/sprite_3d.vs', 'Shaders/sprite_3d.fs',
            "Data/SKYROADS.EXE",
            "Data/ANIM.LZS",
            "Data/CARS.LZS",
            "Data/DASHBRD.LZS",
            "Data/DEMO.REC",
            "Data/FUL_DISP.DAT",
            "Data/GOMENU.LZS",
            "Data/HELPMENU.LZS",
            "Data/INTRO.LZS",
            "Data/INTRO.SND",
            "Data/MAINMENU.LZS",
            "Data/MUZAX.LZS",
            "Data/OXY_DISP.DAT",
            "Data/ROADS.LZS",
            "Data/SETMENU.LZS",
            "Data/SFX.SND",
            "Data/SPEED.DAT",
            "Data/TREKDAT.LZS",
            "Data/WORLD0.LZS",
            "Data/WORLD1.LZS",
            "Data/WORLD2.LZS",
            "Data/WORLD3.LZS",
            "Data/WORLD4.LZS",
            "Data/WORLD5.LZS",
            "Data/WORLD6.LZS",
            "Data/WORLD7.LZS",
            "Data/WORLD8.LZS",
            "Data/WORLD9.LZS"
        ]).done(() => {
                var exe = new ExeData.ExeDataLoader(managers);
                exe.load();
                var combine = new Images.GaugeCompressor();
                combine.combineGauges(managers);

                var doc = wgl.document();
                var cvs = doc.createElement('canvas', 1280, 800, true);
                cvs.setTitle('SkyRoads VR');
                managers.Keyboard = new Engine.KeyboardManager(<any>doc);
                var opl = new Music.OPL(managers);
                var player = new Music.Player(opl, managers);
                opl.setSource(player);

                managers.Player = player;

                managers.VR = new VR.NodeVRProvider(doc);
                managers.VR.enable();

                var state = new States.Intro(managers);
                //var state = new States.GoMenu(managers);
                //var state = new States.MainMenu(managers);
                //var state = new States.GameState(managers, 0, new Game.DemoController(managers.Streams.getRawArray('DEMO.REC')));
                managers.Frames = new Engine.FrameManager(new Engine.NodeDocumentProvider(doc, cvs), cvs, managers, state, new Engine.Clock());
            });
    }
}

declare var exports: any;
if (typeof exports !== 'undefined') {
    exports.Configurations = {
        runNode: Configurations.runNode
    };
}